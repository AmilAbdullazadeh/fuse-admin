import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import React from 'react';

function NavbarLayout2() {
	return (
		<div className="flex flex-auto justify-between items-center w-full h-full container p-0 lg:px-24">
			<div className="flex flex-shrink-0 items-center px-8">
				<Logo />
			</div>

			<FuseScrollbars className="flex h-full items-center">
				<Navigation className="w-full" layout="horizontal" />
			</FuseScrollbars>
		</div>
	);
}

export default React.memo(NavbarLayout2);
