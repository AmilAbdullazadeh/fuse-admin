import React from 'react';

const MaintenancePageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/maintenance',
			component: React.lazy(() => import('./MaintenancePage'))
		}
	]
};

export default MaintenancePageConfig;
