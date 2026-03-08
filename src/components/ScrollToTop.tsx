'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	// Montrer le bouton quand on scrolle vers le bas
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Fonction pour remonter
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className='fixed bottom-8 right-8 p-3 rounded-full bg-[#84378d] text-white shadow-lg hover:bg-rose-700 transition flex items-center justify-center z-50 focus:outline-none focus:ring-2 focus:ring-[#84378d] focus:ring-offset-2'
					aria-label='Remonter en haut de la page'>
					<ArrowUp className='w-6 h-6' />
				</button>
			)}
		</>
	);
}
