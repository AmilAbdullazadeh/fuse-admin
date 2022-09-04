import React from 'react';

const FileManagerAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/file-manager',
			component: React.lazy(() => import('./FileManagerApp'))
		}
	]
};

export default FileManagerAppConfig;
