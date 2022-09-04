import React from 'react';

const ModernInvoicePageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/pages/invoices/modern',
			component: React.lazy(() => import('./ModernInvoicePage'))
		}
	]
};

export default ModernInvoicePageConfig;
