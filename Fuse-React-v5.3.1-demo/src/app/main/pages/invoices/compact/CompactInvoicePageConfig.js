import React from 'react';

const CompactInvoicePageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/invoices/compact',
			component: React.lazy(() => import('./CompactInvoicePage'))
		}
	]
};

export default CompactInvoicePageConfig;
