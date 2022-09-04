import React from 'react';

const PricingStyle2PageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/pricing/style-2',
			component: React.lazy(() => import('./PricingStyle2Page'))
		}
	]
};

export default PricingStyle2PageConfig;
