import React from 'react';

const cardedLayoutRoutes = [
	{
		path: '/ui/page-layouts/carded/full-width',
		component: React.lazy(() => import('./full-width'))
	},
	{
		path: '/ui/page-layouts/carded/full-width-tabbed',
		component: React.lazy(() => import('./full-width-tabbed'))
	},
	{
		path: '/ui/page-layouts/carded/full-width-2',
		component: React.lazy(() => import('./full-width-2'))
	},
	{
		path: '/ui/page-layouts/carded/full-width-2-tabbed',
		component: React.lazy(() => import('./full-width-2-tabbed'))
	},
	{
		path: '/ui/page-layouts/carded/left-sidebar',
		component: React.lazy(() => import('./left-sidebar'))
	},
	{
		path: '/ui/page-layouts/carded/left-sidebar-tabbed',
		component: React.lazy(() => import('./left-sidebar-tabbed'))
	},
	{
		path: '/ui/page-layouts/carded/left-sidebar-2',
		component: React.lazy(() => import('./left-sidebar-2'))
	},
	{
		path: '/ui/page-layouts/carded/left-sidebar-2-tabbed',
		component: React.lazy(() => import('./left-sidebar-2-tabbed'))
	},
	{
		path: '/ui/page-layouts/carded/right-sidebar',
		component: React.lazy(() => import('./right-sidebar'))
	},
	{
		path: '/ui/page-layouts/carded/right-sidebar-tabbed',
		component: React.lazy(() => import('./right-sidebar-tabbed'))
	},
	{
		path: '/ui/page-layouts/carded/right-sidebar-2',
		component: React.lazy(() => import('./right-sidebar-2'))
	},
	{
		path: '/ui/page-layouts/carded/right-sidebar-2-tabbed',
		component: React.lazy(() => import('./right-sidebar-2-tabbed'))
	}
];

export default cardedLayoutRoutes;
