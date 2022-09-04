import { useForm } from '@fuse/hooks';
import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CommentModel from 'app/main/apps/scrumboard/model/CommentModel';
import React from 'react';

function CardComment(props) {
	const { form, handleChange, resetForm } = useForm({
		idMember: '36027j1930450d8bf7b10158',
		message: ''
	});
	const user = _.find(props.members, { id: form.idMember });

	function isFormInvalid() {
		return form.message === '';
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		if (isFormInvalid()) {
			return;
		}
		props.onCommentAdd(CommentModel(form));
		resetForm();
	}

	return (
		<form onSubmit={handleSubmit} className="flex -mx-8">
			<Avatar className="w-32 h-32 mx-8" alt={user.name} src={user.avatar} />
			<div className="flex flex-col items-start flex-1 mx-8">
				<TextField
					className="flex flex-1"
					fullWidth
					name="message"
					row={3}
					value={form.message}
					onChange={handleChange}
					variant="outlined"
					label="Add comment"
					placeholder="Write a comment..."
				/>
				<Button
					className="mt-16"
					aria-label="save"
					variant="contained"
					color="secondary"
					type="submit"
					size="small"
					disabled={isFormInvalid()}
				>
					Save
				</Button>
			</div>
		</form>
	);
}

export default CardComment;
