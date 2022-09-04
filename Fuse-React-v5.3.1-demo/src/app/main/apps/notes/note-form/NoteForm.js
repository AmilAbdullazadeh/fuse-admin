import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { useForm, useUpdateEffect } from '@fuse/hooks';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import NoteModel from 'app/main/apps/notes/model/NoteModel';
import NoteLabel from 'app/main/apps/notes/NoteLabel';
import NoteReminderLabel from 'app/main/apps/notes/NoteReminderLabel';
import moment from 'moment';
import React, { useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import NoteFormList from './checklist/NoteFormList';
import NoteFormLabelMenu from './NoteFormLabelMenu';
import NoteFormReminder from './NoteFormReminder';
import NoteFormUploadImage from './NoteFormUploadImage';

function NoteForm(props) {
	const [showList, setShowList] = useState(false);
	const routeParams = useParams();
	const { form: noteForm, handleChange, setForm } = useForm(
		_.merge(
			{},
			NoteModel(),
			props.note,
			routeParams.labelId ? { labels: [routeParams.labelId] } : null,
			routeParams.id === 'archive' ? { archive: true } : null
		)
	);
	const { onChange } = props;

	useUpdateEffect(() => {
		if (noteForm && onChange) {
			onChange(noteForm);
		}
	}, [noteForm, onChange]);

	function handleOnCreate(event) {
		if (!props.onCreate) {
			return;
		}
		props.onCreate(noteForm);
	}

	function handleToggleList() {
		setShowList(!showList);
	}

	function handleDateChange(date) {
		setForm(_.setIn(noteForm, 'reminder', date));
	}

	function handleChecklistChange(checklist) {
		setForm(_.setIn(noteForm, `checklist`, checklist));
	}

	function handleRemoveLabel(id) {
		setForm(
			_.setIn(
				noteForm,
				`labels`,
				noteForm.labels.filter(_id => _id !== id)
			)
		);
	}

	function handleLabelsChange(labels) {
		setForm(_.setIn(noteForm, `labels`, labels));
	}

	function handleRemoveImage() {
		setForm(_.setIn(noteForm, `image`, ''));
	}

	function handleArchiveToggle() {
		setForm(_.setIn(noteForm, `archive`, !noteForm.archive));
		if (props.variant === 'new') {
			setTimeout(() => handleOnCreate());
		}
	}

	function handleUploadChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();

		reader.readAsBinaryString(file);

		reader.onload = () => {
			setForm(_.setIn(noteForm, `image`, `data:${file.type};base64,${btoa(reader.result)}`));
		};

		reader.onerror = () => {
			console.log('error on load image');
		};
	}

	function newFormButtonDisabled() {
		return (
			noteForm.title === '' &&
			noteForm.image === '' &&
			noteForm.description === '' &&
			noteForm.checklist.length === 0
		);
	}

	if (!noteForm) {
		return null;
	}

	return (
		<div className="flex flex-col w-full">
			<FuseScrollbars className="flex flex-auto w-full max-h-640">
				<div className="w-full">
					{noteForm.image && noteForm.image !== '' && (
						<div className="relative">
							<img src={noteForm.image} className="w-full block" alt="note" />
							<Fab
								className="absolute right-0 bottom-0 m-8"
								variant="extended"
								size="small"
								color="secondary"
								aria-label="Delete Image"
								onClick={handleRemoveImage}
							>
								<Icon fontSize="small">delete</Icon>
							</Fab>
						</div>
					)}
					<div className="p-16 pb-12">
						<Input
							className="font-bold"
							placeholder="Title"
							type="text"
							name="title"
							value={noteForm.title}
							onChange={handleChange}
							disableUnderline
							fullWidth
						/>
					</div>
					<div className="p-16 pb-12">
						<Input
							placeholder="Take a note..."
							multiline
							rows="4"
							name="description"
							value={noteForm.description}
							onChange={handleChange}
							disableUnderline
							fullWidth
							autoFocus
						/>
					</div>

					{(noteForm.checklist.length > 0 || showList) && (
						<div className="px-16">
							<NoteFormList checklist={noteForm.checklist} onCheckListChange={handleChecklistChange} />
						</div>
					)}

					{(noteForm.labels || noteForm.reminder || noteForm.time) && (
						<div className="flex flex-wrap w-full p-16 pb-12 -mx-4">
							{noteForm.reminder && <NoteReminderLabel className="mt-4 mx-4" date={noteForm.reminder} />}
							{noteForm.labels &&
								noteForm.labels.map(id => (
									<NoteLabel
										id={id}
										key={id}
										className="mt-4 mx-4"
										onDelete={() => handleRemoveLabel(id)}
									/>
								))}
							{noteForm.time && (
								<Typography color="textSecondary" className="text-12 mt-8 mx-4">
									Edited: {moment(noteForm.time).format('MMM DD YY, h:mm A')}
								</Typography>
							)}
						</div>
					)}
				</div>
			</FuseScrollbars>

			<div className="flex flex-auto justify-between items-center h-48">
				<div className="flex items-center px-4">
					<Tooltip title="Remind me" placement="bottom">
						<div>
							<NoteFormReminder reminder={noteForm.reminder} onChange={handleDateChange} />
						</div>
					</Tooltip>

					<Tooltip title="Add image" placement="bottom">
						<div>
							<NoteFormUploadImage onChange={handleUploadChange} />
						</div>
					</Tooltip>

					<Tooltip title="Add checklist" placement="bottom">
						<IconButton className="w-32 h-32 mx-4 p-0" onClick={handleToggleList}>
							<Icon fontSize="small">playlist_add_check</Icon>
						</IconButton>
					</Tooltip>

					<Tooltip title="Change labels" placement="bottom">
						<div>
							<NoteFormLabelMenu note={noteForm} onChange={handleLabelsChange} />
						</div>
					</Tooltip>

					<Tooltip title={noteForm.archive ? 'Unarchive' : 'Archive'} placement="bottom">
						<div>
							<IconButton
								className="w-32 h-32 mx-4 p-0"
								onClick={handleArchiveToggle}
								disabled={newFormButtonDisabled()}
							>
								<Icon fontSize="small">{noteForm.archive ? 'unarchive' : 'archive'}</Icon>
							</IconButton>
						</div>
					</Tooltip>
				</div>
				<div className="flex items-center px-4">
					{props.variant === 'new' ? (
						<Button
							className="m-4"
							onClick={handleOnCreate}
							variant="outlined"
							size="small"
							disabled={newFormButtonDisabled()}
						>
							Create
						</Button>
					) : (
						<>
							<Tooltip title="Delete Note" placement="bottom">
								<IconButton className="w-32 h-32 mx-4 p-0" onClick={props.onRemove}>
									<Icon fontSize="small">delete</Icon>
								</IconButton>
							</Tooltip>
							<Button className="m-4" onClick={props.onClose} variant="outlined" size="small">
								Close
							</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

NoteForm.propTypes = {};
NoteForm.defaultProps = {
	variant: 'edit',
	note: null
};

export default withRouter(NoteForm);
