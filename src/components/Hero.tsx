// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
	return (
		<section
			id='accueil'
			className='relative flex min-h-screen text-white bg-slate-900 flex-col justify-center items-center text-center px-4 overflow-hidden'>
			<div className='absolute inset-0 z-0'>
				{/* L'attribut autoPlay, loop, muted et playsInline sont obligatoires pour que la vidéo se lance automatiquement, même sur mobile */}
				<video
					autoPlay
					loop
					muted
					playsInline
					className='w-full h-full object-cover opacity-80'>
					{/* Placez votre fichier vidéo dans le dossier "public" à la racine de votre projet (par exemple: public/hero-video.mp4) */}
					<source src='/hero-video.mp4' type='video/mp4' />
					Votre navigateur ne supporte pas les vidéos HTML5.
				</video>

				{/* Filtre de couleur (overlay) pour assurer un bon contraste avec le texte */}
				<div className='absolute inset-0 bg-slate-900/60' />
			</div>

			<motion.div
				className='relative z-10 max-w-2xl'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h1 className='text-3xl font-extrabold tracking-tight sm:text-5xl mb-6'>
					Révélez votre force & votre grâce
				</h1>
				<h2 className='mt-4 text-xl sm:text-2xl text-slate-200 font-light mb-8'>
					<strong>Pole Dance</strong>, Pilates & Yoga à{' '}
					<strong>Anglet</strong>
				</h2>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<a
						href='#evjf'
						className='rounded-full bg-[#dca7e2] px-8 py-4 text-lg font-semibold text-fuchsia-800 shadow-sm hover:bg-fuchsia-200 focus-visible:outline transition-colors duration-200'>
						Organiser un EVJF
					</a>
					<a
						href='#contact'
						className='rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#84378d] shadow-sm hover:bg-rose-50 transition-colors duration-200'>
						Me Contacter
					</a>
				</div>
			</motion.div>
		</section>
	);
}
