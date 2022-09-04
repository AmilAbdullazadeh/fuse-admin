import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mock from '../mock';

const contactsDB = {
	contacts: [
		{
			id: '5725a680b3249760ea21de52',
			name: 'Abbott',
			lastName: 'Keitch',
			avatar: 'assets/images/avatars/Abbott.jpg',
			nickname: 'Royalguard',
			company: 'Saois',
			jobTitle: 'Digital Archivist',
			email: 'abbott@withinpixels.com',
			phone: '+1-202-555-0175',
			address: '933 8th Street Stamford, CT 06902',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680606588342058356d',
			name: 'Arnold',
			lastName: 'Matlock',
			avatar: 'assets/images/avatars/Arnold.jpg',
			nickname: 'Wanderer',
			company: 'Laotcone',
			jobTitle: 'Graphic Artist',
			email: 'arnold@withinpixels.com',
			phone: '+1-202-555-0141',
			address: '906 Valley Road Michigan City, IN 46360',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a68009e20d0a9e9acf2a',
			name: 'Barrera',
			lastName: 'Bradbury',
			avatar: 'assets/images/avatars/Barrera.jpg',
			nickname: 'Jackal',
			company: 'Unizim',
			jobTitle: 'Graphic Designer',
			email: 'barrera@withinpixels.com',
			phone: '+1-202-555-0196',
			address: '183 River Street Passaic, NJ 07055',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a6809fdd915739187ed5',
			name: 'Blair',
			lastName: 'Strangeway',
			avatar: 'assets/images/avatars/Blair.jpg',
			nickname: 'Knight',
			company: 'Conedubdax',
			jobTitle: 'Visual Designer',
			email: 'blair@withinpixels.com',
			phone: '+1-202-555-0118',
			address: '143 Jones Street Eau Claire, WI 54701',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a68007920cf75051da64',
			name: 'Boyle',
			lastName: 'Winters',
			avatar: 'assets/images/avatars/Boyle.jpg',
			nickname: 'Jester',
			company: 'Newo',
			jobTitle: 'Catalogue Illustrator',
			email: 'boyle@withinpixels.com',
			phone: '+1-202-555-0177',
			address: '218 Pearl Street Brandon, FL 33510',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a68031fdbb1db2c1af47',
			name: 'Christy',
			lastName: 'Camacho',
			avatar: 'assets/images/avatars/Christy.jpg',
			nickname: 'Mist',
			company: 'uniway',
			jobTitle: '3D Animator',
			email: 'christy@withinpixels.com',
			phone: '+1-202-555-0136',
			address: '329 Bridge Street Desoto, TX 75115',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680bc670af746c435e2',
			name: 'Copeland',
			lastName: 'Redcliff',
			avatar: 'assets/images/avatars/Copeland.jpg',
			nickname: 'Cloudlaw',
			company: 'Tempron',
			jobTitle: 'Multimedia Artist',
			email: 'copeland@withinpixels.com',
			phone: '+1-202-555-0107',
			address: '956 6th Avenue North Bergen, NJ 0704',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680e7eb988a58ddf303',
			name: 'Estes',
			lastName: 'Stevens',
			avatar: 'assets/images/avatars/Estes.jpg',
			nickname: 'Roamer',
			company: 'nam-dex',
			jobTitle: 'Special Effects Artist',
			email: 'estes@withinpixels.com',
			phone: '+1-202-555-0113',
			address: '664 York Street Cambridge, MA 02138',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680dcb077889f758961',
			name: 'Harper',
			lastName: 'MacGuffin',
			avatar: 'assets/images/avatars/Harper.jpg',
			nickname: 'Tempest',
			company: 'runcane',
			jobTitle: 'Application Developer',
			email: 'harper@withinpixels.com',
			phone: '+1-202-555-0173',
			address: '738 Route 11 Cornelius, NC 28031',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a6806acf030f9341e925',
			name: 'Helen',
			lastName: 'Sheridan',
			avatar: 'assets/images/avatars/Helen.jpg',
			nickname: 'Magicbattler',
			company: 'Subhow',
			jobTitle: 'Content Developer',
			email: 'helen@withinpixels.com',
			phone: '+1-202-555-0163',
			address: '194 Washington Avenue Saint Petersburg, FL 33702',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680ae1ae9a3c960d487',
			name: 'Henderson',
			lastName: 'Cambias',
			avatar: 'assets/images/avatars/Henderson.jpg',
			nickname: 'Blizzard',
			company: 'Howcom',
			jobTitle: 'Web Designer',
			email: 'henderson@withinpixels.com',
			phone: '+1-202-555-0151',
			address: '686 Roosevelt Avenue Oviedo, FL 32765',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680b8d240c011dd224b',
			name: 'Josefina',
			lastName: 'Lakefield',
			avatar: 'assets/images/avatars/Josefina.jpg',
			nickname: 'Violet',
			company: 'Gecko',
			jobTitle: 'Web Developer',
			email: 'josefina@withinpixels.com',
			phone: '+1-202-555-0160',
			address: '202 Hartford Road Lynchburg, VA 24502',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a68034cb3968e1f79eac',
			name: 'Katina',
			lastName: 'Bletchley',
			avatar: 'assets/images/avatars/Katina.jpg',
			nickname: 'Rose',
			company: 'Lexicom',
			jobTitle: 'Software Designer',
			email: 'katina@withinpixels.com',
			phone: '+1-202-555-0186',
			address: '219 Woodland Road Valrico, FL 33594',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a6801146cce777df2a08',
			name: 'Lily',
			lastName: 'Peasegood',
			avatar: 'assets/images/avatars/Lily.jpg',
			nickname: 'Star',
			company: 'zooflex',
			jobTitle: 'Software Specialist',
			email: 'lily@withinpixels.com',
			phone: '+1-202-555-0115',
			address: '305 Willow Drive Superior, WI 54880',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a6808a178bfd034d6ecf',
			name: 'Mai',
			lastName: 'Nox',
			avatar: 'assets/images/avatars/Mai.jpg',
			nickname: 'Violetmage',
			company: 'quadzone',
			jobTitle: 'Software Engineer',
			email: 'mai@withinpixels.com',
			phone: '+1-202-555-0199',
			address: '148 Heather Lane Mcminnville, TN 37110',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680653c265f5c79b5a9',
			name: 'Nancy',
			lastName: 'Jaggers',
			avatar: 'assets/images/avatars/Nancy.jpg',
			nickname: 'Silverwarden',
			company: 'Opetamnix',
			jobTitle: 'Software Architect',
			email: 'nancy@withinpixels.com',
			phone: '+1-202-555-0120',
			address: '345 Laurel Lane Union City, NJ 07087',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680bbcec3cc32a8488a',
			name: 'Nora',
			lastName: 'Franklin',
			avatar: 'assets/images/avatars/Nora.jpg',
			nickname: 'Katanachanter',
			company: 'Saoway',
			jobTitle: 'Database Coordinator',
			email: 'nora@withinpixels.com',
			phone: '+1-202-555-0172',
			address: '572 Rose Street Summerfield, FL 34491',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a6803d87f1b77e17b62b',
			name: 'Odessa',
			lastName: 'Goodman',
			avatar: 'assets/images/avatars/Odessa.jpg',
			nickname: 'Rose',
			company: 'transace',
			jobTitle: 'Database Administration Manager',
			email: 'odessa@withinpixels.com',
			phone: '+1-202-555-0190',
			address: '527 Jefferson Court Conyers, GA 30012',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680e87cb319bd9bd673',
			name: 'Reyna',
			lastName: 'Preece',
			avatar: 'assets/images/avatars/Reyna.jpg',
			nickname: 'Holydawn',
			company: 'Dingex',
			jobTitle: 'Data Processing Planner',
			email: 'reyna@withinpixels.com',
			phone: '+1-202-555-0116',
			address: '297 Strawberry Lane Faribault, MN 55021',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a6802d10e277a0f35775',
			name: 'Shauna',
			lastName: 'Atherton',
			avatar: 'assets/images/avatars/Shauna.jpg',
			nickname: 'Faunasoul',
			company: 'Vivaflex',
			jobTitle: 'Art Director',
			email: 'shauna@withinpixels.com',
			phone: '+1-202-555-0159',
			address: '928 Canterbury Court Pittsburgh, PA 15206',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680aef1e5cf26dd3d1f',
			name: 'Shepard',
			lastName: 'Rosco',
			avatar: 'assets/images/avatars/Shepard.jpg',
			nickname: 'Fireking',
			company: 'Goldenla',
			jobTitle: 'Magazine Designer',
			email: 'shepard@withinpixels.com',
			phone: '+1-202-555-0173',
			address: '904 Ridge Road Pickerington, OH 43147',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680cd7efa56a45aea5d',
			name: 'Tillman',
			lastName: 'Lee',
			avatar: 'assets/images/avatars/Tillman.jpg',
			nickname: 'Gust',
			company: 'K-techno',
			jobTitle: 'News Photographer',
			email: 'tillman@withinpixels.com',
			phone: '+1-202-555-0183',
			address: '447 Charles Street Dorchester, MA 02125',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a680fb65c91a82cb35e2',
			name: 'Trevino',
			lastName: 'Bush',
			avatar: 'assets/images/avatars/Trevino.jpg',
			nickname: 'Wolf',
			company: 'Dalthex',
			jobTitle: 'Photojournalist',
			email: 'trevino@withinpixels.com',
			phone: '+1-202-555-0138',
			address: '84 Valley View Road Norman, OK 73072',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a68018c663044be49cbf',
			name: 'Tyson',
			lastName: 'Marshall',
			avatar: 'assets/images/avatars/Tyson.jpg',
			nickname: 'Honordread',
			company: 'Geocon',
			jobTitle: 'Manuscript Editor',
			email: 'tyson@withinpixels.com',
			phone: '+1-202-555-0146',
			address: '204 Clark Street Monsey, NY 10952',
			birthday: undefined,
			notes: ''
		},
		{
			id: '5725a6809413bf8a0a5272b1',
			name: 'Velazquez',
			lastName: 'Smethley',
			avatar: 'assets/images/avatars/Velazquez.jpg',
			nickname: 'Strifedream',
			company: 'ranex',
			jobTitle: 'Publications Editor',
			email: 'velezquez@withinpixels.com',
			phone: '+1-202-555-0146',
			address: '261 Cleveland Street Riverside, NJ 08075',
			birthday: undefined,
			notes: ''
		}
	],
	user: [
		{
			id: '5725a6802d10e277a0f35724',
			name: 'John Doe',
			avatar: 'assets/images/avatars/profile.jpg',
			starred: [
				'5725a680ae1ae9a3c960d487',
				'5725a6801146cce777df2a08',
				'5725a680bbcec3cc32a8488a',
				'5725a680bc670af746c435e2',
				'5725a68009e20d0a9e9acf2a'
			],
			frequentContacts: [
				'5725a6809fdd915739187ed5',
				'5725a68031fdbb1db2c1af47',
				'5725a680606588342058356d',
				'5725a680e7eb988a58ddf303',
				'5725a6806acf030f9341e925',
				'5725a68034cb3968e1f79eac',
				'5725a6801146cce777df2a08',
				'5725a680653c265f5c79b5a9'
			],
			groups: [
				{
					id: '5725a6802d10e277a0f35739',
					name: 'Friends',
					contactIds: ['5725a680bbcec3cc32a8488a', '5725a680e87cb319bd9bd673', '5725a6802d10e277a0f35775']
				},
				{
					id: '5725a6802d10e277a0f35749',
					name: 'Clients',
					contactIds: [
						'5725a680cd7efa56a45aea5d',
						'5725a68018c663044be49cbf',
						'5725a6809413bf8a0a5272b1',
						'5725a6803d87f1b77e17b62b'
					]
				},
				{
					id: '5725a6802d10e277a0f35329',
					name: 'Recent Workers',
					contactIds: [
						'5725a680bbcec3cc32a8488a',
						'5725a680653c265f5c79b5a9',
						'5725a6808a178bfd034d6ecf',
						'5725a6801146cce777df2a08'
					]
				}
			]
		}
	]
};

mock.onGet('/api/contacts-app/contacts').reply(config => {
	const { id } = config.params;
	let response = [];
	switch (id) {
		case 'frequent': {
			response = contactsDB.contacts.filter(contact => contactsDB.user[0].frequentContacts.includes(contact.id));
			break;
		}
		case 'starred': {
			response = contactsDB.contacts.filter(contact => contactsDB.user[0].starred.includes(contact.id));
			break;
		}
		default: {
			response = contactsDB.contacts;
		}
	}
	return [200, response];
});

mock.onGet('/api/contacts-app/user').reply(config => {
	return [200, contactsDB.user[0]];
});

mock.onPost('/api/contacts-app/add-contact').reply(request => {
	const { contact } = JSON.parse(request.data);
	const newContact = {
		...contact,
		id: FuseUtils.generateGUID()
	};
	contactsDB.contacts = [...contactsDB.contacts, newContact];
	return [200, newContact];
});

mock.onPost('/api/contacts-app/update-contact').reply(request => {
	const { contact } = JSON.parse(request.data);

	contactsDB.contacts = contactsDB.contacts.map(_contact => {
		if (contact.id === _contact.id) {
			return contact;
		}
		return _contact;
	});

	return [200, contact];
});

mock.onPost('/api/contacts-app/remove-contact').reply(request => {
	const { contactId } = JSON.parse(request.data);
	contactsDB.contacts = contactsDB.contacts.filter(contact => contactId !== contact.id);

	return [200, contactId];
});

mock.onPost('/api/contacts-app/remove-contacts').reply(request => {
	const { contactIds } = JSON.parse(request.data);
	contactsDB.contacts = contactsDB.contacts.filter(contact => !contactIds.includes(contact.id));
	return [200, contactIds];
});

mock.onPost('/api/contacts-app/toggle-starred-contact').reply(request => {
	const { contactId } = JSON.parse(request.data);
	contactsDB.user[0].starred = _.xor(contactsDB.user[0].starred, [contactId]);
	return [200, contactId];
});

mock.onPost('/api/contacts-app/toggle-starred-contacts').reply(request => {
	const { contactIds } = JSON.parse(request.data);
	contactsDB.user[0].starred = _.xor(contactsDB.user[0].starred, contactIds);
	return [200, contactIds];
});

mock.onPost('/api/contacts-app/set-contacts-starred').reply(request => {
	const { contactIds } = JSON.parse(request.data);

	contactsDB.user[0].starred = [...contactsDB.user[0].starred, ...contactIds];

	return [200, contactIds];
});

mock.onPost('/api/contacts-app/set-contacts-unstarred').reply(request => {
	const { contactIds } = JSON.parse(request.data);

	contactsDB.user[0].starred = contactsDB.user[0].starred.filter(contactId => !contactIds.includes(contactId));

	return [200, contactIds];
});
