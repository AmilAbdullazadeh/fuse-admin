import React from 'react';

const GettingStartedDocRoutes = [
	{
		path: '/documentation/getting-started/introduction',
		component: React.lazy(() => import('./introduction/IntroductionDoc'))
	},
	{
		path: '/documentation/getting-started/installation',
		component: React.lazy(() => import('./installation/InstallationDoc'))
	},
	{
		path: '/documentation/getting-started/git-repository',
		component: React.lazy(() => import('./git-repository/GitRepositoryDoc'))
	}
];

export default GettingStartedDocRoutes;
