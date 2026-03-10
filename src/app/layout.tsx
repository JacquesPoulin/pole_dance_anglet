import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Pole Dance Anglet | EVJF, Cours de Pole & Cerceau au Pays Basque',
	description:
		'Studio de Pole Dance à Anglet (Pays Basque). Spécialiste des EVJF (Enterrement de vie de jeune fille), cours réguliers de Pole, Cerceau Aérien, Yoga et Pilates. Réservez votre événement sur la Côte Basque !',
	keywords: [
		'Pole Dance Anglet',
		'EVJF Pays Basque',
		'Enterrement de vie de jeune fille Anglet',
		'Pays basque Pole Dance',
		'EVJF Biarritz Bayonne',
		'Cerceau aérien',
		'Studio Pole Dance 64',
		'Activité EVJF 64',
		'Pole Dance Biarritz',
		'Danse sportive',
	],
	openGraph: {
		title: 'EVJF & Pole Dance Anglet (Pays Basque)',
		description:
			'Le studio incontournable pour vos EVJF et cours de Pole Dance sur la Côte Basque (Anglet/Biarritz/Bayonne).',
		url: 'https://poledanceanglet.fr',
		siteName: 'Pole Dance Anglet',
		locale: 'fr_FR',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
