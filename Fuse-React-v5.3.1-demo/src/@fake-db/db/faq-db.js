import mock from '../mock';

const faqDB = [
	{
		id: '1',
		question: 'Proident tempor est nulla irure ad est?',
		answer:
			'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.'
	},
	{
		id: '2',
		question: 'Ullamco duis commodo sint ad aliqua aute?',
		answer: 'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.'
	},
	{
		id: '3',
		question: 'Eiusmod non occaecat pariatur Lorem in ex?',
		answer:
			'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.'
	},
	{
		id: '4',
		question: 'Lorem magna cillum consequat consequat mollit?',
		answer:
			'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.'
	},
	{
		id: '5',
		question: 'Quis irure cupidatat ad consequat reprehenderit excepteur?',
		answer:
			'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.'
	},
	{
		id: '6',
		question: 'Officia voluptate tempor ut mollit ea cillum?',
		answer: 'Deserunt veniam reprehenderit do elit magna ut.'
	},
	{
		id: '7',
		question: 'Sunt fugiat officia nisi minim sunt duis?',
		answer:
			'Eiusmod eiusmod sint aliquip exercitation cillum. Magna nulla officia ex consectetur ea ad excepteur in qui.'
	},
	{
		id: '8',
		question: 'Non cupidatat enim quis aliquip minim laborum?',
		answer:
			'Qui cillum eiusmod nostrud sunt dolore velit nostrud labore voluptate ad dolore. Eu Lorem anim pariatur aliqua. Ullamco ut dolor velit esse occaecat dolore eu cillum commodo qui. Nulla dolor consequat voluptate magna ut commodo magna consectetur non aute proident.'
	},
	{
		id: '9',
		question: 'Dolor ex occaecat magna labore laboris qui?',
		answer:
			'Incididunt qui excepteur eiusmod elit cillum occaecat voluptate cillum nostrud. Dolor ullamco ullamco eiusmod do sunt adipisicing pariatur. In esse esse labore id reprehenderit sint do. Pariatur culpa dolor tempor qui excepteur duis do anim minim ipsum.'
	},
	{
		id: '10',
		question: 'Nisi et ullamco minim ea proident tempor?',
		answer: 'Dolor veniam dolor cillum Lorem magna nisi in occaecat nulla dolor ea eiusmod.'
	},
	{
		id: '11',
		question: 'Amet sunt et quis amet commodo quis?',
		answer: 'Nulla dolore consequat aliqua sint consequat elit qui occaecat et.'
	},
	{
		id: '12',
		question: 'Ut eiusmod ex ea eiusmod culpa incididunt?',
		answer:
			'Fugiat non incididunt officia ex incididunt occaecat. Voluptate nostrud culpa aliquip mollit incididunt non dolore.'
	},
	{
		id: '13',
		question: 'Proident reprehenderit laboris pariatur ut et nisi?',
		answer: 'Reprehenderit proident ut ad cillum quis velit quis aliqua ut aliquip tempor ullamco.'
	},
	{
		id: '14',
		question: 'Aliqua aliquip aliquip aliquip et exercitation aute?',
		answer:
			'Adipisicing Lorem tempor ex anim. Labore tempor laboris nostrud dolore voluptate ullamco. Fugiat ex deserunt anim minim esse velit laboris aute ea duis incididunt. Elit irure id Lorem incididunt laborum aliquip consectetur est irure sunt. Ut labore anim nisi aliqua tempor laborum nulla cillum. Duis irure consequat cillum magna cillum eiusmod ut. Et exercitation voluptate quis deserunt elit quis dolor deserunt ex ex esse ex.'
	}
];

mock.onGet('/api/faq').reply(config => {
	return [200, faqDB];
});
