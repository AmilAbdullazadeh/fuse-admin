import React from 'react';

const Login3PageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/auth/login-3',
			component: React.lazy(() => import('./Login3Page'))
		}
	]
};

export default Login3PageConfig;
