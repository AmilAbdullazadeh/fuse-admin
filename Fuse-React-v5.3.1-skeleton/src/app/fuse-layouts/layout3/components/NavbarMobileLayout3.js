import FuseScrollbars from '@fuse/core/FuseScrollbars';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarFoldedToggleButton from 'app/fuse-layouts/shared-components/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import UserNavbarHeader from 'app/fuse-layouts/shared-components/UserNavbarHeader';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
	content: {
		overflowX: 'hidden',
		overflowY: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		background:
			'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 40px, 100% 10px',
		backgroundAttachment: 'local, scroll'
	}
});

function NavbarMobileLayout3(props) {
	const classes = useStyles(props);
	const theme = useTheme();

	return (
		<div className="flex flex-col h-full overflow-hidden">
			<AppBar
				color="primary"
				position="static"
				className="flex flex-row items-center flex-shrink h-48 md:h-64 min-h-48 md:min-h-64 px-12 shadow-0"
			>
				<div className="flex flex-1 mx-8">
					<Logo />
				</div>

				<Hidden mdDown>
					<NavbarFoldedToggleButton className="w-40 h-40 p-0" />
				</Hidden>

				<Hidden lgUp>
					<NavbarMobileToggleButton className="w-40 h-40 p-0">
						<Icon>{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}"</Icon>
					</NavbarMobileToggleButton>
				</Hidden>
			</AppBar>

			<FuseScrollbars className={clsx(classes.content)}>
				<UserNavbarHeader />

				<Navigation layout="vertical" />
			</FuseScrollbars>
		</div>
	);
}

export default React.memo(NavbarMobileLayout3);
