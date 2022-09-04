import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function MainSidebarHeader() {
	return (
		<div className="flex items-center h-full p-12">
			<Icon>folder</Icon>
			<Typography variant="h6" className="mx-12">
				File Manager
			</Typography>
		</div>
	);
}

export default MainSidebarHeader;
