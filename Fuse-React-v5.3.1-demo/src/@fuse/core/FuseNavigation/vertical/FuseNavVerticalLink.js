import FuseUtils from '@fuse/utils';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import FuseNavBadge from '../FuseNavBadge';

const useStyles = makeStyles(theme => ({
	item: props => ({
		height: 40,
		width: 'calc(100% - 16px)',
		borderRadius: '0 20px 20px 0',
		paddingRight: 12,
		paddingLeft: props.itemPadding > 80 ? 80 : props.itemPadding,
		'&.active': {
			backgroundColor: `${theme.palette.secondary.main}!important`,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
			'& .list-item-text-primary': {
				color: 'inherit'
			},
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			marginRight: 16
		},
		'& .list-item-text': {},
		color: theme.palette.text.primary,
		textDecoration: 'none!important'
	})
}));

function FuseNavVerticalLink(props) {
	const dispatch = useDispatch();
	const userRole = useSelector(({ auth }) => auth.user.role);

	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const { item, nestedLevel } = props;
	const classes = useStyles({
		itemPadding: nestedLevel > 0 ? 40 + nestedLevel * 16 : 24
	});

	const hasPermission = useMemo(() => FuseUtils.hasPermission(item.auth, userRole), [item.auth, userRole]);

	if (!hasPermission) {
		return null;
	}

	return (
		<ListItem
			button
			component="a"
			href={item.url}
			target={item.target ? item.target : '_blank'}
			className={clsx(classes.item, 'list-item')}
			onClick={ev => mdDown && dispatch(navbarCloseMobile())}
			role="button"
		>
			{item.icon && (
				<Icon className="list-item-icon text-16 flex-shrink-0" color="action">
					{item.icon}
				</Icon>
			)}

			<ListItemText
				className="list-item-text"
				primary={item.title}
				classes={{ primary: 'text-14 list-item-text-primary' }}
			/>

			{item.badge && <FuseNavBadge badge={item.badge} />}
		</ListItem>
	);
}

FuseNavVerticalLink.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		icon: PropTypes.string,
		url: PropTypes.string,
		target: PropTypes.string
	})
};
FuseNavVerticalLink.defaultProps = {};

const NavVerticalLink = withRouter(React.memo(FuseNavVerticalLink));

export default NavVerticalLink;
