import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import { client } from '@/sanity/lib/client';
import { Star } from 'lucide-react';

export const revalidate = 60;

export default async function Home() {
	const galleryImages = await client.fetch(
		`*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      title,
      category,
      "imageUrl": image.asset->url
    }`,
	);

	return (
		<main className='min-h-screen bg-rose-50 overflow-x-hidden pt-16'>
			<Navbar />
			<Hero />

			{/* Bio Section */}
			<section
				id='biographie'
				className='py-24 relative bg-cover bg-center bg-fixed bg-no-repeat'
				style={{
					backgroundImage: `url('/IMG-20221124-WA0025.jpg')`,
				}}>
				{/* Overlay blanc semi-transparent pour garder le texte très lisible */}
				<div className='absolute inset-0 bg-white/90'></div>

				<div className='container relative mx-auto px-4 md:px-6 z-10'>
					<h2 className='text-4xl font-bold tracking-tight text-center mb-16 text-[#84378d]'>
						Biographie
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
						<div className='space-y-6'>
							<h3 className='text-2xl font-semibold text-rose-700'>
								Mon parcours
							</h3>
							<ul className='text-slate-800 leading-relaxed text-justify space-y-4 list-none pl-0'>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Danseuse professionnelle formée en classique, jazz, Pilates
										et Pole Dance
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Formation au Diplôme d'Etat en danse Jazz de l'Institut Rick
										Odums
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Obtention du Certificat d'enseignement Pilates Matwork
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Formation niveau Avancé technique pole dance Doris Arnold
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Danseuse Compagnie Maât (83) puis Compagnie Moebius (Quentin
										Rouillier et Florence Vitrac / Nouméa) Festival Waan Dance
										Pacific
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Tournées Cabaret (Strasbourg), Danseuse Compétition Pole
										Théâtre Paris 2016 avec Travis Scott
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Shows de Pole Dance au Wicked Bar Paris, au Cabaret Piano,
										Salons du Mariage
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Show de Pole Dance au Casino Barrière Enghien les Bains
									</span>
								</li>
								<li className='flex items-start gap-3 group'>
									<span className='shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-[#84378d] group-hover:bg-[#84378d] group-hover:text-white transition-colors duration-300'>
										<Star size={12} strokeWidth={3} />
									</span>
									<span>
										Professeur de Pole Dance / Pilates et danse moderne aux
										studios : ASW Paris, Ecole de Danse Carine Richez Nouméa,
										Pole Dance Marseille, Spin With Me / Casaparadis, Paris Yoga
										Shala, Studio Françoise Doris Arnold
									</span>
								</li>
							</ul>
						</div>
						<div className='space-y-6'>
							<h3 className='text-2xl font-semibold text-rose-700'>
								Ma méthode
							</h3>
							<div className='text-slate-800 leading-relaxed text-justify space-y-4'>
								<p>
									Après une formation professionnelle de Danse classique et jazz
									j'ai approfondi mes connaissances avec le Pilates puis j'ai eu
									la chance d'être formée en pole dance par des champions
									mondiaux Elena Gibson, Travis Scott et de faire de nombreuses
									performances.
								</p>
								<p>
									J'ai enseigné et dansé en France et dans le Pacifique ; grâce
									à ma passion j'ai eu de nombreux élèves. J'analyse et corrige
									toujours les mouvements de chacun avec précision et
									bienveillance en aidant chacun à trouver ses qualités uniques.
									Du débutant au niveau avancé, les cours sont ouverts à tous et
									chacun se fera plaisir dès les premiers cours.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* EVJF Section */}
			<section
				id='evjf'
				className='py-24 relative bg-cover bg-center bg-fixed bg-no-repeat border-t border-rose-100'
				style={{
					backgroundImage: `url('/IMG-20221124-WA0003.jpg')`,
				}}>
				{/* Overlay rosé semi-transparent pour garder l'ambiance et la lisibilité */}
				<div className='absolute inset-0 bg-rose-50/90'></div>

				<div className='container relative z-10 mx-auto px-4 md:px-6 max-w-5xl'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#84378d]'>
							Enterrement de Vie de Jeune Fille{' '}
							<span className='block text-3xl mt-2 text-rose-700 font-medium'>
								(EVJF à Anglet - Côte Basque)
							</span>
						</h2>
						<p className='text-xl text-slate-700 font-medium max-w-3xl mx-auto'>
							L'<strong>activité originale</strong> par excellence pour un{' '}
							<strong>EVJF inoubliable</strong> près de Biarritz et Bayonne.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-12 gap-12 items-center'>
						<div className='md:col-span-7 space-y-8'>
							<p className='text-lg text-slate-800 leading-relaxed text-justify'>
								Parce que nous aspirons toutes à de beaux moments inoubliables,
								votre mission est de réaliser le rêve d'EVJF parfait pour votre
								meilleure amie. Trouver l'activité idéale pour rendre cet
								événement unique n'est pas chose aisée...
								<br />
								<br />
								C'est pourquoi je vous propose de plonger dans une expérience à
								la fois{' '}
								<strong className='text-rose-700'>
									sensuelle, amusante et pleine de surprises
								</strong>{' '}
								: un cours de pole dance 100% privatisé ! Parfait pour un{' '}
								<strong>EVJF sportif et original au Pays Basque</strong>.
							</p>

							<div className='bg-white p-8 rounded-3xl shadow-sm border border-rose-100'>
								<h3 className='text-xl font-bold text-[#84378d] mb-6 text-center'>
									Pourquoi choisir cette activité ?
								</h3>
								<ul className='space-y-6'>
									<li className='flex items-start'>
										<span className='shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold mr-4'>
											1
										</span>
										<div>
											<strong className='text-slate-900 block mb-1'>
												Originalité
											</strong>
											<span className='text-slate-600 leading-snug block text-justify'>
												Offrez à la mariée et à vos amies une expérience unique
												dont elles se souviendront longtemps !
											</span>
										</div>
									</li>
									<li className='flex items-start'>
										<span className='shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold mr-4'>
											2
										</span>
										<div>
											<strong className='text-slate-900 block mb-1'>
												Sportivité
											</strong>
											<span className='text-slate-600 leading-snug block text-justify'>
												Sculptez votre corps tout en vous amusant : chaque
												mouvement de pole dance tonifie et renforce vos muscles
												en profondeur.
											</span>
										</div>
									</li>
									<li className='flex items-start'>
										<span className='shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold mr-4'>
											3
										</span>
										<div>
											<strong className='text-slate-900 block mb-1'>
												Plaisir
											</strong>
											<span className='text-slate-600 leading-snug block text-justify'>
												Créez des souvenirs inoubliables et partagez des moments
												de complicité et de joie avec vos amies lors de cette
												activité ludique !
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='md:col-span-5 flex flex-col justify-center items-center h-full space-y-10'>
							<div className='text-center space-y-4'>
								<p className='text-2xl font-light text-slate-700'>
									Choisissez une
									<span className='block font-bold text-[#84378d] text-3xl mt-2'>
										activité tendance
									</span>
									pour votre EVJF au Pays Basque !
								</p>
								<div className='flex gap-4 justify-center items-center text-rose-700 font-medium text-lg mt-6'>
									<span className='px-4 py-2 bg-rose-100 rounded-full'>
										Sensualité
									</span>
									<span>&</span>
									<span className='px-4 py-2 bg-rose-100 rounded-full'>
										Rires garantis
									</span>
								</div>
							</div>

							<div className='pt-8 w-full flex justify-center'>
								<a
									href='#contact'
									className='group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-[#84378d] rounded-full hover:bg-rose-700 hover:shadow-xl hover:-translate-y-1 overflow-hidden w-full sm:w-auto text-xl'>
									<span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b from-transparent via-transparent to-black'></span>
									<span className='relative'>Demander un Devis 🎉</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Courses />

			<Gallery images={galleryImages} />

			<Pricing />

			<Contact />

			<ScrollToTop />
		</main>
	);
}
