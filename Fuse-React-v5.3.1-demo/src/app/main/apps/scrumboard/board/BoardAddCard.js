import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newCard } from '../store/boardSlice';

function BoardAddCard(props) {
	const dispatch = useDispatch();
	const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

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
		dispatch(newCard({ boardId: board.id, listId: props.listId, cardTitle: form.title })).then(() => {
			props.onCardAdded();
		});
		handleCloseForm();
	}

	function isFormInvalid() {
		return form.title.length === 0;
	}

	return (
		<div className="w-full border-t-1">
			{formOpen ? (
				<ClickAwayListener onClickAway={handleCloseForm}>
					<form className="p-16" onSubmit={handleSubmit}>
						<TextField
							className="mb-16"
							required
							fullWidth
							variant="outlined"
							label="Card title"
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
						root: 'font-600 w-full rounded-none h-48',
						label: 'justify-start'
					}}
				>
					<Icon className="text-20">add</Icon>
					<span className="mx-8">Add a card</span>
				</Button>
			)}
		</div>
	);
}

export default BoardAddCard;
