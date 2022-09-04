import React from 'react';

const AuthenticationDocRoutes = [
	{
		path: '/documentation/authentication/jwt',
		component: React.lazy(() => import('./jwt/jwtAuthDoc'))
	},
	{
		path: '/documentation/authentication/firebase',
		component: React.lazy(() => import('./firebase/FirebaseAuthDoc'))
	},
	{
		path: '/documentation/authentication/auth0',
		component: React.lazy(() => import('./auth0/Auth0AuthDoc'))
	}
];

export default AuthenticationDocRoutes;
