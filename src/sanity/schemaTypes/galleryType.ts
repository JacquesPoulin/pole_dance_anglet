// src/sanity/schemaTypes/galleryType.ts

export const galleryType = {
	name: 'gallery',
	title: 'Galerie Photo',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Titre de la photo',
			type: 'string',
			validation: (rule: any) => rule.required(),
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true, // Permet â la cliente de recadrer l'image depuis l'admin
			},
			validation: (rule: any) => rule.required(),
		},
		{
			name: 'category',
			title: 'Catégorie',
			type: 'string',
			options: {
				list: [
					{ title: 'Pole Dance', value: 'pole-dance' },
					{ title: 'Pilates', value: 'pilates' },
					{ title: 'Yoga', value: 'yoga' },
					{ title: 'EVJF', value: 'evjf' },
					{ title: 'Cours', value: 'cours' },
					{ title: 'Autre', value: 'autre' },
				],
				layout: 'radio',
			},
			validation: (rule: any) => rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
			subtitle: 'category',
		},
	},
};
