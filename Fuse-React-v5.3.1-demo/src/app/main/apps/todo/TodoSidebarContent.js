import FuseAnimate from '@fuse/core/FuseAnimate';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from './store/filtersSlice';
import { selectFolders } from './store/foldersSlice';
import { selectLabels } from './store/labelsSlice';
import { openNewTodoDialog } from './store/todosSlice';

const useStyles = makeStyles(theme => ({
	listItem: {
		color: 'inherit!important',
		textDecoration: 'none!important',
		height: 40,
		width: 'calc(100% - 16px)',
		borderRadius: '0 20px 20px 0',
		paddingLeft: 24,
		paddingRight: 12,
		'&.active': {
			backgroundColor: theme.palette.secondary.main,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			fontSize: 16,
			width: 16,
			height: 16,
			marginRight: 16
		}
	},
	listSubheader: {
		paddingLeft: 24
	}
}));

function TodoSidebarContent(props) {
	const dispatch = useDispatch();
	const labels = useSelector(selectLabels);
	const folders = useSelector(selectFolders);
	const filters = useSelector(selectFilters);

	const classes = useStyles(props);

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={400}>
			<div className="flex-auto border-l-1 border-solid">
				<div className="p-24">
					<Button
						onClick={() => {
							dispatch(openNewTodoDialog());
						}}
						variant="contained"
						color="primary"
						className="w-full"
					>
						Add task
					</Button>
				</div>

				<div className={classes.listWrapper}>
					<List>
						{folders.length > 0 &&
							folders.map(folder => (
								<ListItem
									button
									component={NavLinkAdapter}
									to={`/apps/todo/${folder.handle}`}
									key={folder.id}
									activeClassName="active"
									className={classes.listItem}
								>
									<Icon className="list-item-icon" color="action">
										{folder.icon}
									</Icon>
									<ListItemText primary={folder.title} disableTypography />
								</ListItem>
							))}
					</List>

					<List>
						<ListSubheader className={classes.listSubheader} disableSticky>
							FILTERS
						</ListSubheader>

						{filters.length > 0 &&
							filters.map(filter => (
								<ListItem
									button
									component={NavLinkAdapter}
									to={`/apps/todo/filter/${filter.handle}`}
									activeClassName="active"
									className={classes.listItem}
									key={filter.id}
								>
									<Icon className="list-item-icon" color="action">
										{filter.icon}
									</Icon>
									<ListItemText primary={filter.title} disableTypography />
								</ListItem>
							))}
					</List>

					<List>
						<ListSubheader className={classes.listSubheader} disableSticky>
							LABELS
						</ListSubheader>

						{labels.length > 0 &&
							labels.map(label => (
								<ListItem
									button
									component={NavLinkAdapter}
									to={`/apps/todo/label/${label.handle}`}
									key={label.id}
									className={classes.listItem}
								>
									<Icon className="list-item-icon" style={{ color: label.color }} color="action">
										label
									</Icon>
									<ListItemText primary={label.title} disableTypography />
								</ListItem>
							))}
					</List>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default TodoSidebarContent;
