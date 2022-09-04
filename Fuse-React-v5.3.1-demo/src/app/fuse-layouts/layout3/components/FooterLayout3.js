import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PoweredByLinks from 'app/fuse-layouts/shared-components/PoweredByLinks';
import PurchaseButton from 'app/fuse-layouts/shared-components/PurchaseButton';
import DocumentationButton from 'app/fuse-layouts/shared-components/DocumentationButton';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';

function FooterLayout3(props) {
	const footerTheme = useSelector(selectFooterTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar
				id="fuse-footer"
				className="relative z-10 shadow-md"
				color="default"
				style={{ backgroundColor: footerTheme.palette.background.paper }}
			>
				<Toolbar className="container min-h-48 md:min-h-64 px-8 sm:px-12 lg:px-20 py-0 flex items-center overflow-x-auto">
					<div className="flex flex-grow flex-shrink-0">
						<PurchaseButton className="mx-4" />
						<DocumentationButton className="mx-4" />
					</div>

					<div className="flex flex-grow flex-shrink-0 px-12 justify-end">
						<PoweredByLinks />
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(FooterLayout3);
