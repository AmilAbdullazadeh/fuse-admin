import React from 'react';

const ThirdPartyComponentsRoutes = [
	{
		path: '/documentation/third-party-components/formsy',
		component: React.lazy(() => import('./formsy/FormsyDoc'))
	},
	{
		path: '/documentation/third-party-components/react-table',
		component: React.lazy(() => import('./react-table/ReactTableDoc'))
	},
	{
		path: '/documentation/third-party-components/google-map-react',
		component: React.lazy(() => import('./google-map-react/GoogleMapReactDoc'))
	},
	{
		path: '/documentation/third-party-components/react-chartjs-2',
		component: React.lazy(() => import('./react-chartjs-2/ReactChartJs2Doc'))
	}
];

export default ThirdPartyComponentsRoutes;
