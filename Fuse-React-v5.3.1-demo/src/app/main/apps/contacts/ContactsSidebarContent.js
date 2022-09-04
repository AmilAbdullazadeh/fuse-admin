import FuseAnimate from '@fuse/core/FuseAnimate';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNewContactDialog } from './store/contactsSlice';

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
			marginRight: 16
		}
	}
}));

function ContactsSidebarContent(props) {
	const user = useSelector(({ contactsApp }) => contactsApp.user);

	const dispatch = useDispatch();

	const classes = useStyles(props);

	return (
		<div className="p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4">
			<FuseAnimate animation="transition.slideLeftIn" delay={200}>
				<Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow">
					<div className="p-24 flex items-center">
						<Avatar alt={user.name} src={user.avatar} />
						<Typography className="mx-12">{user.name}</Typography>
					</div>

					<Divider />

					<div className="p-24">
						<Button
							variant="contained"
							color="primary"
							className="w-full"
							onClick={ev => dispatch(openNewContactDialog())}
						>
							New Contact
						</Button>
					</div>

					<List className="pt-0">
						<ListItem
							button
							component={NavLinkAdapter}
							to="/apps/contacts/all"
							activeClassName="active"
							className={classes.listItem}
						>
							<Icon className="list-item-icon text-16" color="action">
								people
							</Icon>
							<ListItemText className="truncate" primary="All contacts" disableTypography />
						</ListItem>
						<ListItem
							button
							component={NavLinkAdapter}
							to="/apps/contacts/frequent"
							activeClassName="active"
							className={classes.listItem}
						>
							<Icon className="list-item-icon text-16" color="action">
								restore
							</Icon>
							<ListItemText className="truncate" primary="Frequently contacted" disableTypography />
						</ListItem>
						<ListItem
							button
							component={NavLinkAdapter}
							to="/apps/contacts/starred"
							activeClassName="active"
							className={classes.listItem}
						>
							<Icon className="list-item-icon text-16" color="action">
								star
							</Icon>
							<ListItemText className="truncate" primary="Starred contacts" disableTypography />
						</ListItem>
					</List>
				</Paper>
			</FuseAnimate>
		</div>
	);
}

export default ContactsSidebarContent;
