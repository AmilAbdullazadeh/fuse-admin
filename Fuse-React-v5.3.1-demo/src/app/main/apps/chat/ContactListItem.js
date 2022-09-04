import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import StatusIcon from './StatusIcon';

const useStyles = makeStyles(theme => ({
	contactListItem: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		'&.active': {
			backgroundColor: theme.palette.background.paper
		}
	},
	unreadBadge: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText
	}
}));

function ContactListItem(props) {
	const classes = useStyles(props);

	return (
		<ListItem
			button
			className={clsx(classes.contactListItem, 'px-16 py-12 min-h-92', {
				active: props.selectedContactId === props.contact.id
			})}
			onClick={() => props.onContactClick(props.contact.id)}
		>
			<div className="relative">
				<div className="absolute right-0 bottom-0 -m-4 z-10">
					<StatusIcon status={props.contact.status} />
				</div>

				<Avatar src={props.contact.avatar} alt={props.contact.name}>
					{!props.contact.avatar || props.contact.avatar === '' ? props.contact.name[0] : ''}
				</Avatar>
			</div>

			<ListItemText
				classes={{
					root: 'min-w-px px-16',
					secondary: 'truncate'
				}}
				primary={props.contact.name}
				secondary={props.contact.mood}
			/>

			{props.contact.chatId && (
				<div className="flex flex-col justify-center items-end">
					{props.contact.lastMessageTime && (
						<Typography className="whitespace-nowrap mb-8">
							{moment(props.contact.lastMessageTime).format('ll')}
						</Typography>
					)}
					{props.contact.unread && (
						<div
							className={clsx(
								classes.unreadBadge,
								'flex items-center justify-center min-w-24 h-24 rounded-full text-14 text-center'
							)}
						>
							{props.contact.unread}
						</div>
					)}
				</div>
			)}
		</ListItem>
	);
}

export default ContactListItem;
