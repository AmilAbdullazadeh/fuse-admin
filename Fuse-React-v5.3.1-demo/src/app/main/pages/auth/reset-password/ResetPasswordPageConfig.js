import React from 'react';

const ResetPasswordPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/auth/reset-password',
			component: React.lazy(() => import('./ResetPasswordPage'))
		}
	]
};

export default ResetPasswordPageConfig;
