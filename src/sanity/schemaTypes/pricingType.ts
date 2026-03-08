// src/sanity/schemaTypes/pricingType.ts

export const pricingType = {
	name: 'pricing',
	title: 'Tarifs et Services',
	type: 'document',
	fields: [
		{
			name: 'category',
			title: 'Catégorie de cours (Ex: Pole Dance, EVJF, Pilates)',
			type: 'string',
			validation: (rule: any) => rule.required(),
		},
		{
			name: 'title',
			title: "Nom du forfait / de l'offre",
			type: 'string',
			validation: (rule: any) => rule.required(),
		},
		{
			name: 'price',
			title: 'Prix (ex: 25€/personne)',
			type: 'string',
			validation: (rule: any) => rule.required(),
		},
		{
			name: 'description',
			title: 'Description',
			description:
				'Détails des conditions ou durée (ex: Carte de 10 cours valable 3 mois)',
			type: 'text',
		},
		{
			name: 'featured',
			title: 'Mettre en avant cette offre ? (Bouton spécial)',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'order',
			title: "Ordre d'affichage (chiffre)",
			type: 'number',
			description: "Un chiffre de 1 â 10 pour trier l'affichage.",
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'price',
		},
	},
};
