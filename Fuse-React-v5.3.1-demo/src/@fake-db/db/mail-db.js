import mock from '../mock';

const mailDB = {
	mails: [
		{
			id: '15459251a6d6b397565',
			from: {
				name: 'Alice Freeman',
				avatar: 'assets/images/avatars/alice.jpg',
				email: 'alicefreeman@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '28 Jun',
			read: false,
			starred: false,
			important: true,
			hasAttachments: true,
			attachments: [
				{
					type: 'image',
					fileName: 'flowers',
					preview: 'assets/images/mail/attachment-1.jpg',
					url: '',
					size: '1.1Mb'
				},
				{
					type: 'image',
					fileName: 'snow',
					preview: 'assets/images/mail/attachment-2.jpg',
					url: '',
					size: '380kb'
				},
				{
					type: 'image',
					fileName: 'sunrise',
					preview: 'assets/images/mail/attachment-3.jpg',
					url: '',
					size: '17Mb'
				}
			],
			labels: [1],
			folder: 0
		},
		{
			id: '154588a0864d2881124',
			from: {
				name: 'Lawrence Collins',
				avatar: 'assets/images/avatars/vincent.jpg',
				email: 'lawrencecollins@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '28 Jun',
			read: false,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '15453ba60d3baa5daaf',
			from: {
				name: 'Judith Burton',
				avatar: 'assets/images/avatars/joyce.jpg',
				email: 'judithburton@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '28 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [3, 2],
			folder: 0
		},
		{
			id: '15453a06c08fb021776',
			from: {
				name: 'Danielle Obrien',
				avatar: 'assets/images/avatars/danielle.jpg',
				email: 'danielleobrien@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '28 Jun',
			read: true,
			starred: true,
			important: false,
			hasAttachments: false,
			labels: [1, 3],
			folder: 0
		},
		{
			id: '154537435d5b32bf11a',
			from: {
				name: 'Brian Flores',
				avatar: '',
				email: 'brianflores@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '26 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '1544e43dcdae6ebf876',
			from: {
				name: 'Charles Kim',
				avatar: 'assets/images/avatars/garry.jpg',
				email: 'charleskim@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '18 Jun',
			read: true,
			starred: false,
			important: true,
			hasAttachments: false,
			labels: [2],
			folder: 0
		},
		{
			id: '1543ee3a5b43e0f9f45',
			from: {
				name: 'Patricia White',
				avatar: '',
				email: 'patriciawhite@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '15 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '1543cc4515df3146112',
			from: {
				name: 'Juan Carpenter',
				avatar: 'assets/images/avatars/james.jpg',
				email: 'juancarpenter@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '11 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '154398a4770d7aaf9a2',
			from: {
				name: 'Maria Gilbert',
				avatar: 'assets/images/avatars/danielle.jpg',
				email: 'mariagilbert@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '5 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '15438351f87dcd68567',
			from: {
				name: 'Tammy Brooks',
				avatar: '',
				email: 'tammybrooks@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
			time: '1 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '1542d75d929a603125',
			from: {
				name: 'Kathy Price',
				avatar: '',
				email: 'kathyprice@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
			time: '1 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '1541ca7af66da284177',
			from: {
				name: 'Alan Coleman',
				avatar: '',
				email: 'alancoleman@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
			time: '28 June',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '154297167e781781745',
			from: {
				name: 'Thomas Silva',
				avatar: '',
				email: 'thomassilva@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
			time: '16 Jun',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 0
		},
		{
			id: '15427f4c1b7f3953234',
			from: {
				name: 'Jessica Robertson',
				avatar: '',
				email: 'jessicarobertson@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
			time: '19 May',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 3
		},
		{
			id: '154204e45a59b168453',
			from: {
				name: 'John Palmer',
				avatar: '',
				email: 'johnpalmer@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
			time: '8 May',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 3
		},
		{
			id: '1541dd1e05dfc439216',
			from: {
				name: 'David Butler',
				avatar: '',
				email: 'davidbutler@creapond.com'
			},
			to: [
				{
					name: 'me',
					email: 'johndoe@creapond.com'
				}
			],
			subject: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			message:
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
			time: '7 May',
			read: true,
			starred: false,
			important: false,
			hasAttachments: false,
			labels: [],
			folder: 3
		}
	],
	folders: [
		{
			id: 0,
			handle: 'inbox',
			title: 'Inbox',
			translate: 'INBOX',
			icon: 'inbox'
		},
		{
			id: 1,
			handle: 'sent',
			title: 'Sent',
			translate: 'SENT',
			icon: 'send'
		},
		{
			id: 2,
			handle: 'drafts',
			title: 'Drafts',
			translate: 'DRAFTS',
			icon: 'email_open'
		},
		{
			id: 3,
			handle: 'spam',
			title: 'Spam',
			translate: 'SPAM',
			icon: 'error'
		},
		{
			id: 4,
			handle: 'trash',
			title: 'Trash',
			translate: 'TRASH',
			icon: 'delete'
		}
	],
	filters: [
		{
			id: 0,
			handle: 'starred',
			title: 'Starred',
			translate: 'STARRED',
			icon: 'star'
		},
		{
			id: 1,
			handle: 'important',
			title: 'Important',
			translate: 'IMPORTANT',
			icon: 'label'
		}
	],
	labels: [
		{
			id: 0,
			handle: 'note',
			title: 'Note',
			color: '#7CB342'
		},
		{
			id: 1,
			handle: 'paypal',
			title: 'Paypal',
			color: '#D84315'
		},
		{
			id: 2,
			handle: 'invoice',
			title: 'Invoice',
			color: '#607D8B'
		},
		{
			id: 3,
			handle: 'amazon',
			title: 'Amazon',
			color: '#03A9F4'
		}
	]
};

mock.onGet('/api/mail-app/mail').reply(config => {
	const { params } = config;
	const response = mailDB.mails.find(mail => mail.id === params.mailId);
	return [200, response];
});

mock.onGet('/api/mail-app/mails').reply(config => {
	const { params } = config;
	let response = [];

	if (params.labelHandle) {
		const labelId = mailDB.labels.find(label => label.handle === params.labelHandle).id;

		response = mailDB.mails.filter(mail => mail.labels.includes(labelId));
	} else if (params.filterHandle) {
		response = mailDB.mails.filter(mail => mail[params.filterHandle]);
	} // folderHandle
	else {
		let { folderHandle } = params;
		if (!folderHandle) {
			folderHandle = 'inbox';
		}
		const folderId = mailDB.folders.find(folder => folder.handle === folderHandle).id;
		response = mailDB.mails.filter(mail => mail.folder === folderId);
	}

	return [200, response];
});

mock.onPost('/api/mail-app/update-mail').reply(request => {
	const mail = JSON.parse(request.data);
	mailDB.mails = mailDB.mails.map(_mail => {
		if (_mail.id === mail.id) {
			return mail;
		}
		return _mail;
	});

	return [200, mail];
});
mock.onGet('/api/mail-app/filters').reply(200, mailDB.filters);
mock.onGet('/api/mail-app/labels').reply(200, mailDB.labels);
mock.onGet('/api/mail-app/folders').reply(200, mailDB.folders);

mock.onPost('/api/mail-app/set-folder').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedMailIds, folderId } = data;
	mailDB.mails = mailDB.mails.map(_mail => {
		if (selectedMailIds.includes(_mail.id)) {
			return {
				..._mail,
				folder: folderId
			};
		}
		return _mail;
	});

	return [200];
});

mock.onPost('/api/mail-app/toggle-label').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedMailIds, labelId } = data;
	mailDB.mails = mailDB.mails.map(_mail => {
		if (selectedMailIds.includes(_mail.id)) {
			return {
				..._mail,
				labels: _mail.labels.includes(labelId)
					? _mail.labels.filter(_id => _id !== labelId)
					: [..._mail.labels, labelId]
			};
		}
		return _mail;
	});

	return [200];
});
mock.onPost('/api/mail-app/delete-mails').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedMailIds } = data;
	mailDB.mails = mailDB.mails.filter(_mail => (selectedMailIds.includes(_mail.id) ? false : _mail));
	return [200];
});
