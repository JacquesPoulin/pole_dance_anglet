// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
	{ name: 'Accueil', href: '#accueil' },
	{ name: 'Biographie', href: '#biographie' },
	{ name: 'EVJF', href: '#evjf' },
	{ name: 'Cours', href: '#cours' },
	{ name: 'Galerie', href: '#galerie' },
	{ name: 'Tarifs', href: '#tarifs' },
	{ name: 'Contact', href: '#contact' },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='fixed w-full z-50 bg-slate-900/95 border-b border-[#dca7e2]/20 backdrop-blur top-0'>
			<div className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'>
				<div className='flex lg:flex-1'>
					<Link
						href='#accueil'
						className='-m-1.5 p-1.5 text-white font-bold text-xl uppercase tracking-tighter'>
						Pole Dance <span className='text-[#dca7e2]'>Anglet</span>
					</Link>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200 hover:text-[#84378d]'
						onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Ouvrir le menu principal</span>
						<Menu className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-8'>
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className='text-sm font-semibold leading-6 text-slate-200 hover:text-[#84378d]  transition-colors'>
							{item.name}
						</Link>
					))}
				</div>
			</div>

			{/* Menu mobile */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '100%' }}
						transition={{ type: 'tween', duration: 0.3 }}
						className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
						<div className='flex items-center justify-between'>
							<Link
								href='#'
								className='-m-1.5 p-1.5 text-white font-bold text-xl'>
								Pole Dance <span className='text-[#84378d]'>Anglet</span>
							</Link>
							<button
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-slate-400 hover:text-[#84378d]'
								onClick={() => setMobileMenuOpen(false)}>
								<X className='h-6 w-6' aria-hidden='true' />
							</button>
						</div>
						<div className='mt-8 flow-root'>
							<div className='-my-6 divide-y divide-[#84378d]/20'>
								<div className='space-y-2 py-6'>
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											onClick={() => setMobileMenuOpen(false)}
											className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-[#84378d] hover:bg-slate-800'>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

