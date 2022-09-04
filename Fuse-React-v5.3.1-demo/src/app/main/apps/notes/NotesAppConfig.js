import React from 'react';

const NotesAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/notes/:id?/:labelHandle?/:labelId?',
			component: React.lazy(() => import('./NotesApp'))
		}
	]
};

export default NotesAppConfig;
