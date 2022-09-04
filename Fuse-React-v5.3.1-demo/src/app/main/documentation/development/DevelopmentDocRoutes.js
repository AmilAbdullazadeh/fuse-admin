import React from 'react';

const DevelopmentDocRoutes = [
	{
		path: '/documentation/development/development-server',
		component: React.lazy(() => import('./development-server/DevelopmentServerDoc'))
	},
	{
		path: '/documentation/development/production',
		component: React.lazy(() => import('./production/ProductionDoc'))
	},
	{
		path: '/documentation/development/deployment',
		component: React.lazy(() => import('./deployment/DeploymentDoc'))
	},
	{
		path: '/documentation/development/project-structure',
		component: React.lazy(() => import('./project-structure/ProjectStructureDoc'))
	},
	{
		path: '/documentation/development/api-calls',
		component: React.lazy(() => import('./api-calls/ApiCallsDoc'))
	},
	{
		path: '/documentation/development/updating-fuse-react',
		component: React.lazy(() => import('./updating-fuse-react/UpdatingFuseReactDoc'))
	},
	{
		path: '/documentation/development/ides-vscode-webstorm',
		component: React.lazy(() => import('./ides-vscode-webstorm/IDEsDoc'))
	}
];

export default DevelopmentDocRoutes;
