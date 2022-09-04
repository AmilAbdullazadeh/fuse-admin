import { useDebounce, useForm } from '@fuse/hooks';
import _ from '@lodash';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import LabelModel from 'app/main/apps/notes/model/LabelModel';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLabels } from '../../store/labelsSlice';

function LabelsForm(props) {
	const dispatch = useDispatch();
	const labels = useSelector(({ notesApp }) => notesApp.labels.entities);

	const [labelsForm, setLabels] = useState(labels);
	const { form: newLabelForm, handleChange, resetForm } = useForm({
		name: ''
	});

	useEffect(() => {
		setLabels(labels);
	}, [labels]);

	const handleOnChange = useDebounce(_labels => {
		dispatch(updateLabels(_labels));
	}, 600);

	useEffect(() => {
		if (labelsForm && !_.isEqual(labelsForm, labels)) {
			handleOnChange(labelsForm);
		}
	}, [handleOnChange, labels, labelsForm]);

	function isFormInValid() {
		return newLabelForm.name === '';
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		if (isFormInValid()) {
			return;
		}
		const newLabel = LabelModel(newLabelForm);
		setLabels(_.setIn(labelsForm, newLabel.id, newLabel));
		resetForm();
	}

	return (
		<>
			<Typography className="text-16 mb-8 font-600">Edit Labels</Typography>
			<List dense>
				<form onSubmit={handleSubmit}>
					<ListItem className="p-0 mb-16" dense>
						<Icon className="list-item-icon text-16" color="action">
							add
						</Icon>
						<Input
							className={clsx('flex flex-1 mx-8')}
							name="name"
							value={newLabelForm.name}
							onChange={handleChange}
							placeholder="Create new label"
						/>
						<IconButton
							className="w-32 h-32 mx-4 p-0"
							aria-label="Delete"
							disabled={isFormInValid()}
							type="submit"
						>
							<Icon fontSize="small">check</Icon>
						</IconButton>
					</ListItem>
				</form>
				{useMemo(() => {
					function handleOnDelete(label) {
						setLabels(_.omit(labelsForm, [label.id]));
					}

					function handleLabelChange(event, label) {
						const updatedLabel = LabelModel(_.setIn(label, event.target.name, event.target.value));
						setLabels(_.setIn(labelsForm, updatedLabel.id, updatedLabel));
					}

					return Object.entries(labelsForm).map(([key, label]) => (
						<ListItem className="p-0" key={label.id} dense>
							<Icon className="list-item-icon text-16" color="action">
								label
							</Icon>
							<Input
								className={clsx('flex flex-1 mx-8')}
								name="name"
								value={label.name}
								onChange={event => handleLabelChange(event, label)}
								disableUnderline
							/>
							<IconButton
								className="w-32 h-32 mx-4 p-0"
								aria-label="Delete"
								onClick={ev => handleOnDelete(label)}
							>
								<Icon fontSize="small">delete</Icon>
							</IconButton>
						</ListItem>
					));
				}, [labelsForm])}
			</List>
		</>
	);
}

export default LabelsForm;
