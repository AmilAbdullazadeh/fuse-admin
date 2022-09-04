import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import NavbarMobileLayout2 from 'app/fuse-layouts/layout2/components/NavbarMobileLayout2';
import NavbarMobileToggleFab from 'app/fuse-layouts/shared-components/NavbarMobileToggleFab';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavbarTheme } from 'app/store/fuse/settingsSlice';
import NavbarLayout2 from './NavbarLayout2';

const navbarWidth = 280;

const useStyles = makeStyles(theme => ({
	navbar: {
		display: 'flex',
		overflow: 'hidden',
		height: 64,
		minHeight: 64,
		alignItems: 'center',
		zIndex: 6
	},
	navbarMobile: {
		display: 'flex',
		overflow: 'hidden',
		flexDirection: 'column',
		width: navbarWidth,
		minWidth: navbarWidth,
		height: '100%',
		zIndex: 4,
		transition: theme.transitions.create(['width', 'min-width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.shorter
		}),
		boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
	}
}));

function NavbarWrapperLayout2(props) {
	const dispatch = useDispatch();
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const navbarTheme = useSelector(selectNavbarTheme);
	const navbar = useSelector(({ fuse }) => fuse.navbar);

	const classes = useStyles(props);

	return (
		<>
			<ThemeProvider theme={navbarTheme}>
				<Hidden mdDown>
					<Paper className={clsx(classes.navbar, 'shadow-md')} square>
						<NavbarLayout2 />
					</Paper>
				</Hidden>

				<Hidden lgUp>
					<SwipeableDrawer
						anchor="left"
						variant="temporary"
						open={navbar.mobileOpen}
						classes={{
							paper: classes.navbarMobile
						}}
						onClose={() => dispatch(navbarCloseMobile())}
						onOpen={() => {}}
						disableSwipeToOpen
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						<NavbarMobileLayout2 />
					</SwipeableDrawer>
				</Hidden>
			</ThemeProvider>

			{config.navbar.display && !config.toolbar.display && (
				<Hidden lgUp>
					<NavbarMobileToggleFab />
				</Hidden>
			)}
		</>
	);
}

export default React.memo(NavbarWrapperLayout2);
