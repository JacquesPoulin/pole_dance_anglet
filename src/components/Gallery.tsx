'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
	_id: string;
	title: string;
	category: string;
	imageUrl: string;
}

interface GalleryProps {
	images: GalleryImage[];
}

export default function Gallery({ images = [] }: GalleryProps) {
	const categoriesFromData = Array.from(
		new Set(images.map((img) => img.category)),
	).filter(Boolean);
	const categories = ['Tout', ...categoriesFromData];
	const [filter, setFilter] = useState('Tout');
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

	const filteredImages =
		filter === 'Tout'
			? images
			: images.filter((img) => img.category === filter);

	return (
		<section id='gallery' className='py-24 bg-white px-4'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl font-bold mb-12 text-center text-[#84378d]'>
					Galerie
				</h2>

				{/* Filtres */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setFilter(cat)}
							className={`px-6 py-2 rounded-full font-semibold cursor-pointer transition-colors
                ${
									filter === cat
										? 'bg-[#84378d] text-white'
										: 'bg-rose-50 text-slate-700 hover:bg-rose-50 hover:text-[#84378d]'
								}`}>
							{cat}
						</button>
					))}
				</div>

				{/* Grille d'images */}
				<motion.div
					layout
					className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					<AnimatePresence>
						{filteredImages.map((img) => (
							<motion.div
								layout
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.3 }}
								key={img._id}
								onClick={() => setSelectedImage(img)}
								className='relative aspect-square rounded-2xl overflow-hidden group bg-rose-50 cursor-pointer'>
								<Image
									src={img.imageUrl}
									alt={img.title || 'Image Galerie'}
									fill
									className='object-cover transition-transform duration-500 group-hover:scale-110'
								/>
								{/* <div className='absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6'>
									<h3 className='text-white font-bold text-lg'>{img.title}</h3>
								</div> */}
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{images.length === 0 && (
					<div className='text-center py-12 text-[#84378d]/80'>
						Aucune image pour le moment. Allez dans le Studio d'administration
						pour en ajouter.
					</div>
				)}

				{/* Lightbox / Modal */}
				<AnimatePresence>
					{selectedImage && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedImage(null)}
							className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm'>
							<button
								className='absolute top-6 right-6 text-white hover:text-[#84378d] p-2'
								onClick={() => setSelectedImage(null)}>
								Fermer
							</button>
							<div
								className='relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden'
								onClick={(e) => e.stopPropagation()}>
								<Image
									src={selectedImage.imageUrl}
									alt={selectedImage.title || 'Image Galerie Grand Format'}
									fill
									className='object-contain'
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}

