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
		<>
			<header className='fixed w-full z-50 bg-slate-900/90 border-b border-[#dca7e2]/20 backdrop-blur-md top-0 transition-all duration-300'>
				<div className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'>
					<div className='flex lg:flex-1'>
						<Link
							href='#accueil'
							className='-m-1.5 p-1.5 text-white font-bold text-xl uppercase tracking-tighter hover:scale-105 transition-transform'>
							Pole Dance <span className='text-[#dca7e2]'>Anglet</span>
						</Link>
					</div>
					<div className='flex lg:hidden'>
						<button
							type='button'
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200 hover:text-[#dca7e2] transition-colors focus:outline-none'
							onClick={() => setMobileMenuOpen(true)}>
							<span className='sr-only'>Ouvrir le menu principal</span>
							<Menu className='h-7 w-7' aria-hidden='true' />
						</button>
					</div>
					<div className='hidden lg:flex lg:gap-x-8'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='text-sm font-semibold leading-6 text-slate-200 hover:text-[#dca7e2] transition-colors relative group'>
								{item.name}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dca7e2] transition-all group-hover:w-full'></span>
							</Link>
						))}
					</div>
				</div>
			</header>

			{/* Menu mobile */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<>
						{/* Overlay (fond assombri) */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className='fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm'
							onClick={() => setMobileMenuOpen(false)}
						/>

						{/* Panneau latéral */}
						<motion.div
							initial={{
								x: '100%',
								borderTopLeftRadius: '100%',
								borderBottomLeftRadius: '100%',
							}}
							animate={{
								x: 0,
								borderTopLeftRadius: '0%',
								borderBottomLeftRadius: '0%',
							}}
							exit={{
								x: '100%',
								borderTopLeftRadius: '100%',
								borderBottomLeftRadius: '100%',
							}}
							transition={{ type: 'spring', damping: 25, stiffness: 200 }}
							className='fixed inset-y-0 right-0 z-[70] w-full max-w-sm overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl ring-1 ring-[#dca7e2]/20 shadow-[#dca7e2]/10'>
							<div className='flex items-center justify-between p-6 border-b border-[#dca7e2]/10'>
								<Link
									href='#accueil'
									className='-m-1.5 p-1.5 text-white font-bold text-xl'
									onClick={() => setMobileMenuOpen(false)}>
									Pole Dance <span className='text-[#dca7e2]'>Anglet</span>
								</Link>
								<button
									type='button'
									className='-m-2.5 rounded-full p-2.5 text-slate-300 hover:bg-slate-800 hover:text-[#dca7e2] transition-colors'
									onClick={() => setMobileMenuOpen(false)}>
									<span className='sr-only'>Fermer le menu</span>
									<X className='h-6 w-6' aria-hidden='true' />
								</button>
							</div>

							<div className='mt-6 px-6'>
								<div className='flex flex-col space-y-4 py-6'>
									{navigation.map((item, i) => (
										<motion.div
											key={item.name}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}>
											<Link
												href={item.href}
												onClick={() => setMobileMenuOpen(false)}
												className='block rounded-xl px-4 py-3 text-lg font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 hover:shadow-sm transition-all border border-transparent hover:border-[#dca7e2]/20'>
												{item.name}
											</Link>
										</motion.div>
									))}
								</div>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8 }}
									className='mt-8 pt-8 border-t border-[#dca7e2]/10'>
									<p className='text-sm text-slate-400 text-center'>
										Rejoignez-nous pour découvrir l'art de la pole dance.
									</p>
								</motion.div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
