import React from 'react';

const PricingStyle3PageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/pricing/style-3',
			component: React.lazy(() => import('./PricingStyle3Page'))
		}
	]
};

export default PricingStyle3PageConfig;
