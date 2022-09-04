import FuseSearch from '@fuse/core/FuseSearch';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import FullScreenToggle from '../../shared-components/FullScreenToggle';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';

const useStyles = makeStyles(theme => ({
	root: {}
}));

function ToolbarLayout3(props) {
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(selectToolbarTheme);

	const classes = useStyles(props);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx(classes.root, 'flex relative z-10 shadow-md')}
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.paper }}
			>
				<Toolbar className="container p-0 lg:px-24 min-h-48 md:min-h-64">
					{config.navbar.display && (
						<Hidden lgUp>
							<NavbarMobileToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
						</Hidden>
					)}

					<Hidden mdDown>
						<div className={clsx('flex flex-shrink-0 items-center')}>
							<Logo />
						</div>
					</Hidden>

					<div className="flex flex-1">
						<Hidden xsDown>
							<FuseSearch className="mx-16 lg:mx-24" variant="basic" />
						</Hidden>
					</div>

					<div className="flex items-center px-8 md:px-0">
						<Hidden smUp>
							<FuseSearch />
						</Hidden>

						<LanguageSwitcher />

						<FullScreenToggle />

						<QuickPanelToggleButton />
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayout3);
