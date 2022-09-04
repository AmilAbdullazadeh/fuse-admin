import { useForm } from '@fuse/hooks';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renameBoard } from '../store/boardSlice';

function BoardTitle(props) {
	const dispatch = useDispatch();
	const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

	const [formOpen, setFormOpen] = useState(false);
	const { form, handleChange, resetForm, setForm } = useForm({
		title: board.name
	});
	useEffect(() => {
		if (!formOpen) {
			resetForm();
		}
	}, [formOpen, resetForm]);

	useEffect(() => {
		setForm({ title: board.name });
	}, [board.name, setForm]);

	function handleOpenForm(ev) {
		ev.stopPropagation();
		setFormOpen(true);
	}

	function handleCloseForm() {
		setFormOpen(false);
	}

	function isFormInvalid() {
		return form.title === '';
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		if (isFormInvalid()) {
			return;
		}
		dispatch(renameBoard({ boardId: board.id, boardTitle: form.title }));
		handleCloseForm();
	}

	return (
		<div className="flex items-center min-w-0">
			{formOpen ? (
				<ClickAwayListener onClickAway={handleCloseForm}>
					<Paper className="p-4 shadow">
						<form className="flex w-full" onSubmit={handleSubmit}>
							<TextField
								name="title"
								value={form.title}
								onChange={handleChange}
								variant="outlined"
								margin="none"
								autoFocus
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton type="submit" disabled={isFormInvalid()}>
												<Icon>check</Icon>
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						</form>
					</Paper>
				</ClickAwayListener>
			) : (
				<div className="flex items-center justify-center">
					{board.settings.subscribed && <Icon className="text-16">remove_red_eye</Icon>}
					<Typography
						className="text-16 font-600 cursor-pointer mx-8"
						onClick={handleOpenForm}
						color="inherit"
					>
						{board.name}
					</Typography>
				</div>
			)}
		</div>
	);
}

export default BoardTitle;
