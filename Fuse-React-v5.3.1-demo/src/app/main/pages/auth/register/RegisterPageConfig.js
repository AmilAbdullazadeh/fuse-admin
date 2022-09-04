import React from 'react';

const RegisterPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/auth/register',
			component: React.lazy(() => import('./RegisterPage'))
		}
	]
};

export default RegisterPageConfig;
