import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { amber, red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment/moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLabels } from './store/labelsSlice';
import { removeTodo, addTodo, closeNewTodoDialog, closeEditTodoDialog, updateTodo } from './store/todosSlice';

const defaultFormState = {
	id: '',
	title: '',
	notes: '',
	startDate: new Date(),
	dueDate: new Date(),
	completed: false,
	starred: false,
	important: false,
	deleted: false,
	labels: []
};

function TodoDialog(props) {
	const dispatch = useDispatch();
	const todoDialog = useSelector(({ todoApp }) => todoApp.todos.todoDialog);
	const labels = useSelector(selectLabels);

	const [labelMenuEl, setLabelMenuEl] = useState(null);
	const { form, handleChange, setForm } = useForm({ ...defaultFormState });
	const startDate = moment(form.startDate).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
	const dueDate = moment(form.dueDate).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (todoDialog.type === 'edit' && todoDialog.data) {
			setForm({ ...todoDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (todoDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...todoDialog.data,
				id: FuseUtils.generateGUID()
			});
		}
	}, [todoDialog.data, todoDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (todoDialog.props.open) {
			initDialog();
		}
	}, [todoDialog.props.open, initDialog]);

	function closeTodoDialog() {
		return todoDialog.type === 'edit' ? dispatch(closeEditTodoDialog()) : dispatch(closeNewTodoDialog());
	}

	function handleLabelMenuOpen(event) {
		setLabelMenuEl(event.currentTarget);
	}

	function handleLabelMenuClose(event) {
		setLabelMenuEl(null);
	}

	function handleToggleImportant() {
		setForm({
			...form,
			important: !form.important
		});
	}

	function handleToggleStarred() {
		setForm({
			...form,
			starred: !form.starred
		});
	}

	function handleToggleLabel(event, id) {
		event.stopPropagation();
		setForm(
			_.set({
				...form,
				labels: form.labels.includes(id) ? form.labels.filter(labelId => labelId !== id) : [...form.labels, id]
			})
		);
	}

	function toggleCompleted() {
		setForm({
			...form,
			completed: !form.completed
		});
	}

	function canBeSubmitted() {
		return form.title.length > 0;
	}

	return (
		<Dialog
			{...todoDialog.props}
			onClose={closeTodoDialog}
			fullWidth
			maxWidth="sm"
			classes={{
				paper: 'rounded-8'
			}}
		>
			<AppBar position="static" className="shadow-md">
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{todoDialog.type === 'new' ? 'New Todo' : 'Edit Todo'}
					</Typography>
				</Toolbar>
			</AppBar>

			<DialogContent classes={{ root: 'p-0' }}>
				<div className="mb-16">
					<div className="flex items-center justify-between p-12">
						<div className="flex">
							<Checkbox
								tabIndex={-1}
								checked={form.completed}
								onChange={toggleCompleted}
								onClick={ev => ev.stopPropagation()}
							/>
						</div>

						<div className="flex items-center justify-start" aria-label="Toggle star">
							<IconButton onClick={handleToggleImportant}>
								{form.important ? (
									<Icon style={{ color: red[500] }}>error</Icon>
								) : (
									<Icon>error_outline</Icon>
								)}
							</IconButton>

							<IconButton onClick={handleToggleStarred}>
								{form.starred ? (
									<Icon style={{ color: amber[500] }}>star</Icon>
								) : (
									<Icon>star_outline</Icon>
								)}
							</IconButton>
							<div>
								<IconButton
									aria-owns={labelMenuEl ? 'label-menu' : null}
									aria-haspopup="true"
									onClick={handleLabelMenuOpen}
								>
									<Icon>label</Icon>
								</IconButton>
								<Menu
									id="label-menu"
									anchorEl={labelMenuEl}
									open={Boolean(labelMenuEl)}
									onClose={handleLabelMenuClose}
								>
									{labels.length > 0 &&
										labels.map(label => (
											<MenuItem onClick={ev => handleToggleLabel(ev, label.id)} key={label.id}>
												<ListItemIcon className="min-w-24">
													<Icon color="action">
														{form.labels.includes(label.id)
															? 'check_box'
															: 'check_box_outline_blank'}
													</Icon>
												</ListItemIcon>
												<ListItemText
													className="mx-8"
													primary={label.title}
													disableTypography
												/>
												<ListItemIcon className="min-w-24">
													<Icon style={{ color: label.color }} color="action">
														label
													</Icon>
												</ListItemIcon>
											</MenuItem>
										))}
								</Menu>
							</div>
						</div>
					</div>
					<Divider className="mx-24" />
				</div>

				{form.labels.length > 0 && (
					<div className="flex flex-wrap w-full px-12 sm:px-20 mb-16">
						{form.labels.map(label => (
							<Chip
								avatar={
									<Avatar classes={{ colorDefault: 'bg-transparent' }}>
										<Icon
											className="text-20"
											style={{ color: _.find(labels, { id: label }).color }}
										>
											label
										</Icon>
									</Avatar>
								}
								label={_.find(labels, { id: label }).title}
								onDelete={ev => handleToggleLabel(ev, label)}
								className="mx-4 my-4"
								classes={{ label: 'px-8' }}
								key={label}
							/>
						))}
					</div>
				)}

				<div className="px-16 sm:px-24">
					<FormControl className="mt-8 mb-16" required fullWidth>
						<TextField
							label="Title"
							autoFocus
							name="title"
							value={form.title}
							onChange={handleChange}
							required
							variant="outlined"
						/>
					</FormControl>

					<FormControl className="mt-8 mb-16" required fullWidth>
						<TextField
							label="Notes"
							name="notes"
							multiline
							rows="6"
							value={form.notes}
							onChange={handleChange}
							variant="outlined"
						/>
					</FormControl>
					<div className="flex -mx-4">
						<TextField
							name="startDate"
							label="Start Date"
							type="datetime-local"
							className="mt-8 mb-16 mx-4"
							InputLabelProps={{
								shrink: true
							}}
							inputProps={{
								max: dueDate
							}}
							value={startDate}
							onChange={handleChange}
							variant="outlined"
						/>
						<TextField
							name="dueDate"
							label="Due Date"
							type="datetime-local"
							className="mt-8 mb-16 mx-4"
							InputLabelProps={{
								shrink: true
							}}
							inputProps={{
								min: startDate
							}}
							value={dueDate}
							onChange={handleChange}
							variant="outlined"
						/>
					</div>
				</div>
			</DialogContent>

			{todoDialog.type === 'new' ? (
				<DialogActions className="justify-between p-8">
					<div className="px-16">
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								dispatch(addTodo(form)).then(() => {
									closeTodoDialog();
								});
							}}
							disabled={!canBeSubmitted()}
						>
							Add
						</Button>
					</div>
				</DialogActions>
			) : (
				<DialogActions className="justify-between p-8">
					<div className="px-16">
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								dispatch(updateTodo(form)).then(() => {
									closeTodoDialog();
								});
							}}
							disabled={!canBeSubmitted()}
						>
							Save
						</Button>
					</div>
					<IconButton
						className="min-w-auto"
						onClick={() => {
							dispatch(removeTodo(form.id)).then(() => {
								closeTodoDialog();
							});
						}}
					>
						<Icon>delete</Icon>
					</IconButton>
				</DialogActions>
			)}
		</Dialog>
	);
}

export default TodoDialog;
