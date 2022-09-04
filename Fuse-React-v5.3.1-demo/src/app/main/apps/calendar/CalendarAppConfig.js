import React from 'react';

const CalendarAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/calendar',
			component: React.lazy(() => import('./CalendarApp'))
		}
	]
};

export default CalendarAppConfig;
