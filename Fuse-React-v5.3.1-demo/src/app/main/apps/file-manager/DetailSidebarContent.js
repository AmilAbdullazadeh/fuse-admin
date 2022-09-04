import FuseAnimate from '@fuse/core/FuseAnimate';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFileById } from './store/filesSlice';

const useStyles = makeStyles({
	table: {
		'& th': {
			padding: '16px 0'
		}
	},
	typeIcon: {
		'&.folder:before': {
			content: "'folder'",
			color: '#FFB300'
		},
		'&.document:before': {
			content: "'insert_drive_file'",
			color: '#1565C0'
		},
		'&.spreadsheet:before': {
			content: "'insert_chart'",
			color: '#4CAF50'
		}
	}
});

function DetailSidebarContent(props) {
	const selectedItem = useSelector(state => selectFileById(state, state.fileManagerApp.files.selectedItemId));

	const classes = useStyles();

	if (!selectedItem) {
		return null;
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={200}>
			<div className="file-details p-16 sm:p-24">
				<div className="preview h-128 sm:h-256 file-icon flex items-center justify-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className={clsx(classes.typeIcon, selectedItem.type, 'text-48')} />
					</FuseAnimate>
				</div>

				<FormControlLabel
					className="offline-switch"
					control={<Switch checked={selectedItem.offline} aria-label="Available Offline" />}
					label="Available Offline"
				/>

				<Typography variant="subtitle1" className="py-16">
					Info
				</Typography>

				<table className={clsx(classes.table, 'w-full text-justify')}>
					<tbody>
						<tr className="type">
							<th>Type</th>
							<td>{selectedItem.type}</td>
						</tr>

						<tr className="size">
							<th>Size</th>
							<td>{selectedItem.size === '' ? '-' : selectedItem.size}</td>
						</tr>

						<tr className="location">
							<th>Location</th>
							<td>{selectedItem.location}</td>
						</tr>

						<tr className="owner">
							<th>Owner</th>
							<td>{selectedItem.owner}</td>
						</tr>

						<tr className="modified">
							<th>Modified</th>
							<td>{selectedItem.modified}</td>
						</tr>

						<tr className="opened">
							<th>Opened</th>
							<td>{selectedItem.opened}</td>
						</tr>

						<tr className="created">
							<th>Created</th>
							<td>{selectedItem.created}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</FuseAnimate>
	);
}

export default DetailSidebarContent;
