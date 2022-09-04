import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { DateTimePicker } from '@material-ui/pickers';
import moment from 'moment';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeEvent, updateEvent, addEvent, closeNewEventDialog, closeEditEventDialog } from './store/eventsSlice';

const defaultFormState = {
	id: FuseUtils.generateGUID(),
	title: '',
	allDay: true,
	start: moment(new Date(), 'MM/DD/YYYY'),
	end: moment(new Date(), 'MM/DD/YYYY'),
	desc: ''
};

function EventDialog(props) {
	const dispatch = useDispatch();
	const eventDialog = useSelector(({ calendarApp }) => calendarApp.events.eventDialog);
	const { form, handleChange, setForm, setInForm } = useForm(defaultFormState);

	const initDialog = useCallback(() => {
		/**
		 * Dialog type: 'edit'
		 */
		if (eventDialog.type === 'edit' && eventDialog.data) {
			setForm({ ...eventDialog.data });
		}

		/**
		 * Dialog type: 'new'
		 */
		if (eventDialog.type === 'new') {
			setForm({
				...defaultFormState,
				...eventDialog.data,
				id: FuseUtils.generateGUID()
			});
		}
	}, [eventDialog.data, eventDialog.type, setForm]);

	useEffect(() => {
		/**
		 * After Dialog Open
		 */
		if (eventDialog.props.open) {
			initDialog();
		}
	}, [eventDialog.props.open, initDialog]);

	function closeComposeDialog() {
		return eventDialog.type === 'edit' ? dispatch(closeEditEventDialog()) : dispatch(closeNewEventDialog());
	}

	function canBeSubmitted() {
		return form.title.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (eventDialog.type === 'new') {
			dispatch(addEvent(form));
		} else {
			dispatch(updateEvent(form));
		}
		closeComposeDialog();
	}

	function handleRemove() {
		dispatch(removeEvent(form.id));
		closeComposeDialog();
	}

	return (
		<Dialog
			{...eventDialog.props}
			onClose={closeComposeDialog}
			fullWidth
			maxWidth="xs"
			component="form"
			classes={{
				paper: 'rounded-8'
			}}
		>
			<AppBar position="static">
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{eventDialog.type === 'new' ? 'New Event' : 'Edit Event'}
					</Typography>
				</Toolbar>
			</AppBar>

			<form noValidate onSubmit={handleSubmit}>
				<DialogContent classes={{ root: 'p-16 pb-0 sm:p-24 sm:pb-0' }}>
					<TextField
						id="title"
						label="Title"
						className="mt-8 mb-16"
						InputLabelProps={{
							shrink: true
						}}
						name="title"
						value={form.title}
						onChange={handleChange}
						variant="outlined"
						autoFocus
						required
						fullWidth
					/>

					<FormControlLabel
						className="mt-8 mb-16"
						label="All Day"
						control={<Switch checked={form.allDay} id="allDay" name="allDay" onChange={handleChange} />}
					/>

					<DateTimePicker
						label="Start"
						inputVariant="outlined"
						value={form.start}
						onChange={date => setInForm('start', date)}
						className="mt-8 mb-16 w-full"
						maxDate={form.end}
					/>

					<DateTimePicker
						label="End"
						inputVariant="outlined"
						value={form.end}
						onChange={date => setInForm('end', date)}
						className="mt-8 mb-16 w-full"
						minDate={form.start}
					/>

					<TextField
						className="mt-8 mb-16"
						id="desc"
						label="Description"
						type="text"
						name="desc"
						value={form.desc}
						onChange={handleChange}
						multiline
						rows={5}
						variant="outlined"
						fullWidth
					/>
				</DialogContent>

				{eventDialog.type === 'new' ? (
					<DialogActions className="justify-between px-8 sm:px-16">
						<Button variant="contained" color="primary" type="submit" disabled={!canBeSubmitted()}>
							Add
						</Button>
					</DialogActions>
				) : (
					<DialogActions className="justify-between px-8 sm:px-16">
						<Button variant="contained" color="primary" type="submit" disabled={!canBeSubmitted()}>
							Save
						</Button>
						<IconButton onClick={handleRemove}>
							<Icon>delete</Icon>
						</IconButton>
					</DialogActions>
				)}
			</form>
		</Dialog>
	);
}

export default EventDialog;
