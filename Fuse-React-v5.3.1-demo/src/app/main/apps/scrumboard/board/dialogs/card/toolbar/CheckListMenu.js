import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ChecklistModel from 'app/main/apps/scrumboard/model/ChecklistModel';
import React, { useEffect, useState } from 'react';
import ToolbarMenu from './ToolbarMenu';

function CheckListMenu(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const { form, handleChange, resetForm } = useForm({
		name: ''
	});

	useEffect(() => {
		if (!anchorEl) {
			resetForm();
		}
	}, [anchorEl, resetForm]);

	function handleMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	function isFormInvalid() {
		return form.name === '';
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		if (isFormInvalid()) {
			return;
		}
		props.onAddCheckList(ChecklistModel(form));
		handleMenuClose();
	}

	return (
		<div>
			<IconButton color="inherit" onClick={handleMenuOpen}>
				<Icon>check_box</Icon>
			</IconButton>
			<ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
				<form onSubmit={handleSubmit} className="p-16 flex flex-col items-end">
					<TextField
						label="Checklist title"
						name="name"
						value={form.name}
						onChange={handleChange}
						fullWidth
						className="mb-12"
						variant="outlined"
						required
						autoFocus
					/>
					<Button color="secondary" type="submit" disabled={isFormInvalid()} variant="contained">
						Add
					</Button>
				</form>
			</ToolbarMenu>
		</div>
	);
}

export default CheckListMenu;
