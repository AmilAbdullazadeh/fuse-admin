import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import React from 'react';

function NavbarLayout3() {
	return (
		<div className="flex flex-auto items-center w-full h-full container px-16 lg:px-24">
			<FuseScrollbars className="flex h-full items-center">
				<Navigation className="w-full" layout="horizontal" dense />
			</FuseScrollbars>
		</div>
	);
}

export default React.memo(NavbarLayout3);
