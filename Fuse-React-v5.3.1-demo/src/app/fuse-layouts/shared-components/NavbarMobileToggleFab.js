import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navbarToggleMobile } from 'app/store/fuse/navbarSlice';

const useStyles = makeStyles(theme => ({
	buttonIcon: {
		fontSize: 18,
		transition: theme.transitions.create(['transform'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.short
		})
	},
	mobileButton: {
		height: 40,
		position: 'absolute',
		zIndex: 99,
		top: 12,
		width: 24,
		borderRadius: 38,
		padding: 8,
		backgroundColor: theme.palette.background.paper,
		transition: theme.transitions.create(['background-color', 'border-radius', 'width', 'min-width', 'padding'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.shorter
		}),
		'&:hover': {
			width: 52,
			paddingLeft: 8,
			paddingRight: 8
		},
		'&.left': {
			borderBottomLeftRadius: 0,
			borderTopLeftRadius: 0,
			paddingLeft: 4,
			left: 0
		},

		'&.right': {
			borderBottomRightRadius: 0,
			borderTopRightRadius: 0,
			paddingRight: 4,
			right: 0,
			'& $buttonIcon': {
				transform: 'rotate(-180deg)'
			}
		}
	}
}));

function NavbarMobileToggleFab(props) {
	const classes = useStyles(props);
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);

	const dispatch = useDispatch();

	return (
		<Tooltip title="Show Navigation" placement={config.navbar.position === 'left' ? 'right' : 'left'}>
			<Fab
				className={clsx(classes.mobileButton, config.navbar.position, props.className)}
				onClick={ev => dispatch(navbarToggleMobile())}
				disableRipple
			>
				<Icon className={classes.buttonIcon} color="action">
					menu
				</Icon>
			</Fab>
		</Tooltip>
	);
}

NavbarMobileToggleFab.defaultProps = {};

export default NavbarMobileToggleFab;
