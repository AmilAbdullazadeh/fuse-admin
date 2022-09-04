import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import _ from '@lodash';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import moment from 'moment';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLabel } from '../../../store/boardSlice';
import { closeCardDialog, removeCard, updateCard } from '../../../store/cardSlice';

import CardActivity from './activity/CardActivity';
import CardAttachment from './attachment/CardAttachment';
import CardChecklist from './checklist/CardChecklist';
import CardComment from './comment/CardComment';
import CheckListMenu from './toolbar/CheckListMenu';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import MembersMenu from './toolbar/MembersMenu';
import OptionsMenu from './toolbar/OptionsMenu';

function BoardCardForm(props) {
	const dispatch = useDispatch();
	const card = useSelector(({ scrumboardApp }) => scrumboardApp.card.data);
	const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

	const { form: cardForm, handleChange, setForm, setInForm } = useForm(card);
	const updateCardData = useDebounce((boardId, newCard) => {
		dispatch(updateCard({ boardId, card: { ...newCard } }));
	}, 600);
	const dueDate = cardForm && cardForm.due ? moment(cardForm.due).format(moment.HTML5_FMT.DATE) : '';

	useUpdateEffect(() => {
		updateCardData(board.id, cardForm);
	}, [dispatch, board.id, cardForm, updateCardData]);

	function removeDue() {
		setInForm('due', null);
	}

	function toggleLabel(labelId) {
		setInForm('idLabels', _.xor(cardForm.idLabels, [labelId]));
	}

	function toggleMember(memberId) {
		setInForm('idMembers', _.xor(cardForm.idMembers, [memberId]));
	}

	function addCheckList(newList) {
		setInForm('checklists', [...cardForm.checklists, newList]);
	}

	function chipChange(name, value) {
		setInForm(
			name,
			value.map(item => item.value)
		);
	}

	function addNewChip(name, value) {
		setInForm(name, [...cardForm[name], value]);
	}

	function makeCover(attachmentId) {
		setInForm('idAttachmentCover', attachmentId);
	}

	function removeCover() {
		setInForm('idAttachmentCover', '');
	}

	function removeAttachment(attachmentId) {
		setForm({
			...cardForm,
			attachments: _.reject(cardForm.attachments, { id: attachmentId }),
			idAttachmentCover: cardForm.idAttachmentCover === attachmentId ? '' : cardForm.idAttachmentCover
		});
	}

	const handleCheckListChange = useCallback(
		(item, index) => {
			setInForm(`checklists[${index}]`, item);
		},
		[setInForm]
	);

	function removeCheckList(id) {
		setInForm('checklists', _.reject(cardForm.checklists, { id }));
	}

	function commentAdd(comment) {
		return setInForm('activities', [comment, ...cardForm.activities]);
	}

	return (
		<>
			<DialogTitle component="div" className="p-0">
				<AppBar position="static" className="shadow-md">
					<Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
						<div className="flex flex-1">
							<DueMenu onDueChange={handleChange} onRemoveDue={removeDue} due={dueDate} />

							<LabelsMenu
								onToggleLabel={toggleLabel}
								labels={board.labels}
								idLabels={cardForm.idLabels}
							/>

							<MembersMenu
								onToggleMember={toggleMember}
								members={board.members}
								idMembers={cardForm.idMembers}
							/>

							<IconButton color="inherit">
								<Icon>attachment</Icon>
							</IconButton>

							<CheckListMenu onAddCheckList={addCheckList} />

							<OptionsMenu
								onRemoveCard={() => dispatch(removeCard({ boardId: board.id, cardId: cardForm.id }))}
							/>
						</div>
						<IconButton color="inherit" onClick={ev => dispatch(closeCardDialog())}>
							<Icon>close</Icon>
						</IconButton>
					</Toolbar>
				</AppBar>
			</DialogTitle>

			<DialogContent className="p-16 sm:p-24">
				<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24">
					<div className="mb-16 sm:mb-0 flex items-center">
						<Typography>{board.name}</Typography>
						<Icon className="text-20" color="inherit">
							chevron_right
						</Icon>
						{React.useMemo(() => {
							const list = card ? _.find(board.lists, _list => _list.idCards.includes(card.id)) : null;

							return <Typography>{list && list.name}</Typography>;
						}, [board, card])}
					</div>

					{cardForm.due && (
						<TextField
							label="Due date"
							type="date"
							name="due"
							value={dueDate}
							onChange={handleChange}
							placeholder=" Choose a due date"
							className="w-full sm:w-auto"
							InputLabelProps={{
								shrink: true
							}}
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Icon color="action">today</Icon>
									</InputAdornment>
								)
							}}
						/>
					)}
				</div>

				<div className="flex items-center mb-24">
					<TextField
						label="Title"
						type="text"
						name="name"
						value={cardForm.name}
						onChange={handleChange}
						variant="outlined"
						fullWidth
						required
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									{cardForm.subscribed && (
										<Icon className="text-20" color="action">
											remove_red_eye
										</Icon>
									)}
								</InputAdornment>
							)
						}}
					/>
				</div>

				<div className="w-full mb-24">
					<TextField
						label="Description"
						name="description"
						multiline
						rows="4"
						value={cardForm.description}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					/>
				</div>

				<div className="flex flex-col sm:flex-row -mx-8">
					{cardForm.idLabels.length > 0 && (
						<div className="flex-1 mb-24 mx-8">
							<div className="flex items-center mt-16 mb-12">
								<Icon className="text-20" color="inherit">
									label
								</Icon>
								<Typography className="font-600 text-16 mx-8">Labels</Typography>
							</div>
							<FuseChipSelect
								className=""
								value={cardForm.idLabels.map(labelId => {
									const label = _.find(board.labels, { id: labelId });
									return (
										label && {
											value: labelId,
											label: label.name,
											class: label.class
										}
									);
								})}
								onChange={value => chipChange('idLabels', value)}
								placeholder="Select multiple Labels"
								isMulti
								textFieldProps={{
									variant: 'outlined'
								}}
								options={board.labels.map(label => ({
									value: label.id,
									label: label.name,
									class: label.class
								}))}
								onCreateOption={name => {
									// Create New Label
									const newLabel = LabelModel({ name });

									// Ad new Label to board(redux store and server)
									dispatch(addLabel(newLabel));

									// Trigger handle chip change
									addNewChip('idLabels', newLabel.id);

									return newLabel.id;
								}}
							/>
						</div>
					)}

					{cardForm.idMembers.length > 0 && (
						<div className="flex-1 mb-24 mx-8">
							<div className="flex items-center mt-16 mb-12">
								<Icon className="text-20" color="inherit">
									supervisor_account
								</Icon>
								<Typography className="font-600 text-16 mx-8">Members</Typography>
							</div>
							<FuseChipSelect
								className=""
								value={cardForm.idMembers.map(memberId => {
									const member = _.find(board.members, { id: memberId });
									return (
										member && {
											value: member.id,
											label: (
												<Tooltip title={member.name}>
													<Avatar
														className="ltr:-ml-12 rtl:-mr-12 w-32 h-32"
														src={member.avatar}
													/>
												</Tooltip>
											)
										}
									);
								})}
								onChange={value => chipChange('idMembers', value)}
								placeholder="Select multiple Members"
								isMulti
								textFieldProps={{
									variant: 'outlined'
								}}
								options={board.members.map(member => ({
									value: member.id,
									label: (
										<span className="flex items-center">
											<Avatar className="w-32 h-32" src={member.avatar} />
											<span className="mx-8">{member.name}</span>
										</span>
									)
								}))}
								variant="fixed"
							/>
						</div>
					)}
				</div>

				{cardForm.attachments.length > 0 && (
					<div className="mb-24">
						<div className="flex items-center mt-16 mb-12">
							<Icon className="text-20" color="inherit">
								attachment
							</Icon>
							<Typography className="font-600 text-16 mx-8">Attachments</Typography>
						</div>
						<div className="flex flex-col sm:flex-row flex-wrap -mx-16">
							{cardForm.attachments.map(item => (
								<CardAttachment
									item={item}
									card={cardForm}
									makeCover={makeCover}
									removeCover={removeCover}
									removeAttachment={removeAttachment}
									key={item.id}
								/>
							))}
						</div>
					</div>
				)}

				{cardForm.checklists.map((checklist, index) => (
					<CardChecklist
						key={checklist.id}
						checklist={checklist}
						index={index}
						onCheckListChange={handleCheckListChange}
						onRemoveCheckList={() => removeCheckList(checklist.id)}
					/>
				))}

				<div className="mb-24">
					<div className="flex items-center mt-16 mb-12">
						<Icon className="text-20" color="inherit">
							comment
						</Icon>
						<Typography className="font-600 text-16 mx-8">Comment</Typography>
					</div>
					<div>
						<CardComment members={board.members} onCommentAdd={commentAdd} />
					</div>
				</div>

				{cardForm.activities.length > 0 && (
					<div className="mb-24">
						<div className="flex items-center mt-16">
							<Icon className="text-20" color="inherit">
								list
							</Icon>
							<Typography className="font-600 text-16 mx-8">Activity</Typography>
						</div>
						<List className="">
							{cardForm.activities.map(item => (
								<CardActivity item={item} key={item.id} members={board.members} />
							))}
						</List>
					</div>
				)}
			</DialogContent>
		</>
	);
}

export default BoardCardForm;
