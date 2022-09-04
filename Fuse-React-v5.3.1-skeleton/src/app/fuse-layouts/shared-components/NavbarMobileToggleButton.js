import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { navbarToggleMobile } from 'app/store/fuse/navbarSlice';

function NavbarMobileToggleButton(props) {
	const dispatch = useDispatch();

	return (
		<IconButton
			className={props.className}
			onClick={ev => dispatch(navbarToggleMobile())}
			color="inherit"
			disableRipple
		>
			{props.children}
		</IconButton>
	);
}

NavbarMobileToggleButton.defaultProps = {
	children: <Icon color="action">menu</Icon>
};

export default NavbarMobileToggleButton;
