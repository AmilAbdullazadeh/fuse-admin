import React from 'react';

const FuseComponentsRoutes = [
	{
		path: '/documentation/fuse-components/fuse-theme',
		component: React.lazy(() => import('./fuse-theme/FuseThemeDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-authorization',
		component: React.lazy(() => import('./fuse-authorization/FuseAuthorizationDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-layout',
		component: React.lazy(() => import('./fuse-layout/FuseLayoutDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-page-carded',
		component: React.lazy(() => import('./fuse-page-carded/FusePageCardedDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-page-simple',
		component: React.lazy(() => import('./fuse-page-simple/FusePageSimpleDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-scrollbars',
		component: React.lazy(() => import('./fuse-scrollbars/FuseScrollbarsDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-highlight',
		component: React.lazy(() => import('./fuse-highlight/FuseHighlightDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-countdown',
		component: React.lazy(() => import('./fuse-countdown/FuseCountdownDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-navigation',
		component: React.lazy(() => import('./fuse-navigation/FuseNavigationDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-message',
		component: React.lazy(() => import('./fuse-message/FuseMessageDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-dialog',
		component: React.lazy(() => import('./fuse-dialog/FuseDialogDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-animate',
		component: React.lazy(() => import('./fuse-animate/FuseAnimateDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-animate-group',
		component: React.lazy(() => import('./fuse-animate-group/FuseAnimateGroupDoc'))
	},
	{
		path: '/documentation/fuse-components/fuse-chip-select',
		component: React.lazy(() => import('./fuse-chip-select/FuseChipSelectDoc'))
	}
];

export default FuseComponentsRoutes;
