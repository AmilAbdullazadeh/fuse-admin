import React from 'react';

const ConfigurationDocRoutes = [
	{
		path: '/documentation/configuration/settings',
		component: React.lazy(() => import('./settings/SettingsDoc'))
	},
	{
		path: '/documentation/configuration/routing',
		component: React.lazy(() => import('./routing/RoutingDoc'))
	},
	{
		path: '/documentation/configuration/navigation',
		component: React.lazy(() => import('./navigation/NavigationDoc'))
	},
	{
		path: '/documentation/configuration/code-splitting',
		component: React.lazy(() => import('./code-splitting/CodeSplittingDoc'))
	},
	{
		path: '/documentation/configuration/multi-language',
		component: React.lazy(() => import('./multi-language/MultiLanguageDoc'))
	}
];

export default ConfigurationDocRoutes;
