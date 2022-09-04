import React from 'react';

const ProfilePageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/profile',
			component: React.lazy(() => import('./ProfilePage'))
		}
	]
};

export default ProfilePageConfig;
