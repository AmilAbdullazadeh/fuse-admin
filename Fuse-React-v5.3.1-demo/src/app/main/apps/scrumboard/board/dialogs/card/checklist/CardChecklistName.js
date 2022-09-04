import { useForm } from '@fuse/hooks';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

const CardChecklistName = React.forwardRef(function CardChecklistName(props, ref) {
	const [formOpen, setFormOpen] = useState(false);
	const { form, handleChange, resetForm } = useForm({
		name: props.name
	});

	React.useImperativeHandle(ref, () => {
		return {
			openForm: handleOpenForm
		};
	});

	function handleOpenForm(ev) {
		ev.stopPropagation();
		setFormOpen(true);
	}

	function handleCloseForm() {
		setFormOpen(false);
	}

	function handleCancelForm() {
		resetForm();
		handleCloseForm();
	}

	function isFormInvalid() {
		return form.name === '';
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		if (isFormInvalid()) {
			return;
		}
		props.onNameChange(form.name);
		handleCloseForm();
	}

	return formOpen ? (
		<ClickAwayListener onClickAway={handleCancelForm}>
			<form onSubmit={handleSubmit}>
				<TextField
					value={form.name}
					name="name"
					onChange={handleChange}
					variant="outlined"
					margin="dense"
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
		</ClickAwayListener>
	) : (
		<Typography className="text-16 font-600 cursor-pointer mx-8" onClick={handleOpenForm}>
			{form.name}
		</Typography>
	);
});

export default CardChecklistName;
