import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	// Remplacer par le vrai nom de domaine
	const baseUrl = 'https://poledanceanglet.fr';
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/studio/'], // On empêche les robots de scanner l'interface d'administration
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
