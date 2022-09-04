import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem, selectFiles } from './store/filesSlice';

const useStyles = makeStyles({
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

function FileList(props) {
	const dispatch = useDispatch();
	const files = useSelector(selectFiles);
	const selectedItemId = useSelector(({ fileManagerApp }) => fileManagerApp.files.selectedItemId);

	const classes = useStyles();

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className="max-w-64 w-64 p-0 text-center"> </TableCell>
						<TableCell>Name</TableCell>
						<TableCell className="hidden sm:table-cell">Type</TableCell>
						<TableCell className="hidden sm:table-cell">Owner</TableCell>
						<TableCell className="text-center hidden sm:table-cell">Size</TableCell>
						<TableCell className="hidden sm:table-cell">Modified</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{files.map(item => {
						return (
							<TableRow
								key={item.id}
								hover
								onClick={event => dispatch(setSelectedItem(item.id))}
								selected={item.id === selectedItemId}
								className="cursor-pointer"
							>
								<TableCell className="max-w-64 w-64 p-0 text-center">
									<Icon className={clsx(classes.typeIcon, item.type)} />
								</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell className="hidden sm:table-cell">{item.type}</TableCell>
								<TableCell className="hidden sm:table-cell">{item.owner}</TableCell>
								<TableCell className="text-center hidden sm:table-cell">
									{item.size === '' ? '-' : item.size}
								</TableCell>
								<TableCell className="hidden sm:table-cell">{item.modified}</TableCell>
								<Hidden lgUp>
									<TableCell>
										<IconButton
											onClick={ev => props.pageLayout.current.toggleRightSidebar()}
											aria-label="open right sidebar"
										>
											<Icon>info</Icon>
										</IconButton>
									</TableCell>
								</Hidden>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</FuseAnimate>
	);
}

export default FileList;
