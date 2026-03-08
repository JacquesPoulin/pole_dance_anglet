'use client';

import { useState, useEffect } from 'react';
import { Sparkles, HeartPulse, Flower2, GlassWater } from 'lucide-react';

const backgroundImages = [
	'/IMG-20221124-WA0009.jpg',
	'/IMG-20221124-WA0018.jpg',
	'/IMG-20221124-WA0012.jpg',
	'/IMG-20221124-WA0005.jpg',
];

export default function Pricing() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
		}, 4000); // Change l'image toutes les 4 secondes

		return () => clearInterval(interval);
	}, []);

	const pricingGroups = [
		{
			category: 'Pole Dance',
			tagline: 'Grâce & souplesse',
			popular: true,
			icon: <Sparkles className='w-6 h-6' />,
			items: [
				{ title: 'Cours particuliers', price: '40€', desc: ' / personne' },
				{ title: 'Cours pour 2', price: '25€', desc: ' / personne' },
				{ title: 'Stage', price: '25€', desc: ' / personne' },
				{
					title: 'Abonnement',
					price: '225€',
					desc: ' / trimestre (14 cours)',
				},
			],
		},
		{
			category: 'EVJF',
			tagline: 'Moments inoubliables',
			popular: false,
			icon: <GlassWater className='w-6 h-6' />,
			items: [
				{ title: 'Tout inclus', price: '25€', desc: ' / personne' },
				{ title: 'Stage', price: '25€', desc: ' / personne' },
				{ title: 'Mariée', price: 'OFFERT', desc: '(Dès 6 personnes)' },
			],
		},
		{
			category: 'Pilates',
			tagline: 'Renforcement musculaire',
			popular: false,
			icon: <HeartPulse className='w-6 h-6' />,
			items: [{ title: 'Cours privé', price: 'Sur devis', desc: '' }],
		},
		{
			category: 'Yoga',
			tagline: 'Zen & Harmonie',
			popular: false,
			icon: <Flower2 className='w-6 h-6' />,
			items: [{ title: 'Cours privé', price: 'Sur devis', desc: '' }],
		},
	];

	return (
		<section
			id='tarifs'
			className='py-24 relative px-4 border-t border-rose-100 overflow-hidden'>
			{/* Carrousel de fond */}
			{backgroundImages.map((src, index) => (
				<div
					key={src}
					className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ease-in-out ${
						index === currentImageIndex ? 'opacity-100' : 'opacity-0'
					}`}
					style={{ backgroundImage: `url('${src}')` }}
				/>
			))}

			{/* Voile / Overlay pour garder le texte et les cartes lisibles */}
			<div className='absolute inset-0 bg-rose-50/90'></div>

			<div className='max-w-7xl mx-auto relative z-10'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#84378d]'>
						Nos Tarifs
					</h2>
					<p className='text-lg text-slate-700 max-w-2xl mx-auto'>
						Découvrez nos formules adaptées à vos envies, que ce soit pour une
						séance de découverte, un suivi régulier ou un événement spécial.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch'>
					{pricingGroups.map((group, idx) => (
						<div
							key={idx}
							className={`p-8 rounded-3xl relative bg-white shadow-lg flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
								group.popular
									? 'border-2 border-[#84378d] ring-4 ring-[#84378d]/10'
									: 'border border-rose-100'
							}`}>
							{group.popular && (
								<span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#84378d] text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md whitespace-nowrap'>
									Plus populaire
								</span>
							)}

							<div className='flex items-center gap-3 mb-2 text-[#84378d]'>
								{group.icon}
								<h3 className='text-2xl font-bold uppercase tracking-wide'>
									{group.category}
								</h3>
							</div>

							<p className='text-pink-500 text-sm font-medium mb-8 pb-6 border-b border-rose-50'>
								{group.tagline}
							</p>

							<div className='flex-1 space-y-6 mb-8'>
								{group.items.map((item, i) => (
									<div key={i} className='flex flex-col'>
										<span className='text-slate-800 font-semibold mb-1'>
											{item.title}
										</span>
										<div className='flex items-baseline gap-1'>
											<span className='text-2xl font-extrabold text-[#84378d]'>
												{item.price}
											</span>
											<span className='text-sm text-slate-500'>
												{item.desc}
											</span>
										</div>
									</div>
								))}
							</div>

							<a
								href='#contact'
								className={`text-center py-4 rounded-xl font-bold transition-colors w-full mt-auto ${
									group.popular
										? 'bg-[#84378d] hover:bg-pink-600 text-white shadow-md'
										: 'bg-rose-50 hover:bg-rose-100 text-[#84378d]'
								}`}>
								Nous contacter
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
