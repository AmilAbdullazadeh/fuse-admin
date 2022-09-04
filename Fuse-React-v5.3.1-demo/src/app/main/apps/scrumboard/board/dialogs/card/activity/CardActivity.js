import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	commentBubble: {
		borderRadius: '5px 20px 20px 5px',
		border: `1px solid ${theme.palette.divider}`
	}
}));

function CardActivity(props) {
	const classes = useStyles(props);
	const user = _.find(props.members, { id: props.item.idMember });

	switch (props.item.type) {
		case 'comment': {
			return (
				<ListItem dense className="px-0">
					<Avatar alt={user.name} src={user.avatar} className="w-32 h-32" />
					<div className={clsx(classes.commentBubble, 'flex flex-col mx-16 p-12')}>
						<div className="flex items-center">
							<Typography>{user.name}</Typography>
							<Typography className="mx-8 text-12" color="textSecondary">
								{props.item.time}
							</Typography>
						</div>
						<Typography>{props.item.message}</Typography>
					</div>
				</ListItem>
			);
		}
		case 'attachment': {
			return (
				<ListItem dense className="px-0">
					<Avatar alt={user.name} src={user.avatar} className="w-32 h-32" />
					<div className="flex items-center mx-16">
						<Typography>{user.name},</Typography>
						<Typography className="mx-8">{props.item.message}</Typography>
						<Typography className="text-12" color="textSecondary">
							{props.item.time}
						</Typography>
					</div>
				</ListItem>
			);
		}
		default: {
			return null;
		}
	}
}

export default CardActivity;
