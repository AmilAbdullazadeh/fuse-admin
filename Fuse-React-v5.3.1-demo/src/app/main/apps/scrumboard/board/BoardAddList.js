import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newList } from '../store/boardSlice';

const useStyles = makeStyles(theme => ({
	card: {
		backgroundColor: darken(theme.palette.background.paper, theme.palette.type === 'light' ? 0.02 : 0.25)
	}
}));

function BoardAddList(props) {
	const dispatch = useDispatch();
	const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

	const classes = useStyles(props);
	const [formOpen, setFormOpen] = useState(false);
	const { form, handleChange, resetForm } = useForm({
		title: ''
	});

	useEffect(() => {
		if (!formOpen) {
			resetForm();
		}
	}, [formOpen, resetForm]);

	function handleOpenForm(ev) {
		ev.stopPropagation();
		setFormOpen(true);
	}

	function handleCloseForm() {
		setFormOpen(false);
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		dispatch(newList({ boardId: board.id, listTitle: form.title }));
		handleCloseForm();
	}

	function isFormInvalid() {
		return form.title.length === 0;
	}

	return (
		<div>
			<Card className={clsx(classes.card, 'w-320 mx-8 sm:mx-12 rounded-8 shadow')} square>
				{formOpen ? (
					<ClickAwayListener onClickAway={handleCloseForm}>
						<form className="p-16" onSubmit={handleSubmit}>
							<TextField
								className="mb-16"
								required
								fullWidth
								variant="outlined"
								label="List title"
								autoFocus
								name="title"
								value={form.title}
								onChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleCloseForm}>
												<Icon className="text-18">close</Icon>
											</IconButton>
										</InputAdornment>
									)
								}}
							/>

							<div className="flex justify-between items-center">
								<Button variant="contained" color="secondary" type="submit" disabled={isFormInvalid()}>
									Add
								</Button>
							</div>
						</form>
					</ClickAwayListener>
				) : (
					<Button
						onClick={handleOpenForm}
						classes={{
							root: 'font-600 w-full rounded-none h-64',
							label: 'justify-start'
						}}
					>
						<Icon className="text-32 text-red">add_circle</Icon>
						<span className="mx-8">Add a list</span>
					</Button>
				)}
			</Card>
		</div>
	);
}

export default BoardAddList;
