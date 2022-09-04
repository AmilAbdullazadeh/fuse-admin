import React from 'react';

const LoginPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/auth/login',
			component: React.lazy(() => import('./LoginPage'))
		}
	]
};

export default LoginPageConfig;
