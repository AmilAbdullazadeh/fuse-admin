import { useForm } from '@fuse/hooks';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import ListItem from '@material-ui/core/ListItem';
import NoteListItemModel from 'app/main/apps/notes/model/NoteListItemModel';
import React from 'react';

function NoteFormAddListItem(props) {
	const { form, handleChange, resetForm } = useForm({
		text: ''
	});

	function isFormInValid() {
		return form.text === '';
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		if (isFormInValid()) {
			return;
		}
		props.onListItemAdd(NoteListItemModel(form));
		resetForm();
	}

	return (
		<form onSubmit={handleSubmit}>
			<ListItem className="p-0" dense>
				<IconButton className="w-32 h-32 p-0 -mx-4" aria-label="Add" type="submit" disabled={isFormInValid()}>
					<Icon fontSize="small">add</Icon>
				</IconButton>
				<Input
					className="flex flex-1 px-8"
					name="text"
					value={form.text}
					onChange={handleChange}
					placeholder="Add an item"
					disableUnderline
					autoFocus
				/>
			</ListItem>
		</form>
	);
}

export default NoteFormAddListItem;
