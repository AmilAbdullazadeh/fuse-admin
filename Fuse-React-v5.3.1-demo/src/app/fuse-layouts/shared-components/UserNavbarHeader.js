import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		'&.user': {
			'& .username, & .email': {
				transition: theme.transitions.create('opacity', {
					duration: theme.transitions.duration.shortest,
					easing: theme.transitions.easing.easeInOut
				})
			}
		}
	},
	avatar: {
		width: 72,
		height: 72,
		position: 'absolute',
		top: 92,
		padding: 8,
		background: theme.palette.background.default,
		boxSizing: 'content-box',
		left: '50%',
		transform: 'translateX(-50%)',
		transition: theme.transitions.create('all', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		}),
		'& > img': {
			borderRadius: '50%'
		}
	}
}));

function UserNavbarHeader(props) {
	const user = useSelector(({ auth }) => auth.user);

	const classes = useStyles();

	return (
		<AppBar
			position="static"
			color="primary"
			classes={{ root: classes.root }}
			className="user relative flex flex-col items-center justify-center pt-24 pb-64 mb-32 z-0 shadow-0"
		>
			<Typography className="username text-16 whitespace-nowrap" color="inherit">
				{user.data.displayName}
			</Typography>
			<Typography className="email text-13 mt-8 opacity-50 whitespace-nowrap" color="inherit">
				{user.data.email}
			</Typography>
			<Avatar
				className={clsx(classes.avatar, 'avatar')}
				alt="user photo"
				src={
					user.data.photoURL && user.data.photoURL !== ''
						? user.data.photoURL
						: 'assets/images/avatars/profile.jpg'
				}
			/>
		</AppBar>
	);
}

export default UserNavbarHeader;
