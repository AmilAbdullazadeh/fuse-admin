import React from 'react';

const ThemingDocRoutes = [
	{
		path: '/documentation/theming/theme-schemes',
		component: React.lazy(() => import('./theme-schemes/ThemeShemesDoc'))
	},
	{
		path: '/documentation/theming/theme-layouts',
		component: React.lazy(() => import('./theme-layouts/ThemeLayoutsDoc'))
	},
	{
		path: '/documentation/theming/page-layouts',
		component: React.lazy(() => import('./page-layouts/PageLayoutsDoc'))
	},
	{
		path: '/documentation/theming/rtl-support',
		component: React.lazy(() => import('./rtl-support/RTLSupportDoc'))
	},
	{
		path: '/documentation/theming/changing-default-font',
		component: React.lazy(() => import('./changing-default-font/ChangingDefaultFontDoc'))
	}
];

export default ThemingDocRoutes;
