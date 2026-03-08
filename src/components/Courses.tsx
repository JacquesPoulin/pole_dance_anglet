import { Sparkles, HeartPulse, Flower2 } from 'lucide-react';

export default function Courses() {
	const courses = [
		{
			title: 'Pole Dance',
			question: 'Pourquoi la Pole Dance ?',
			paragraphs: [
				"La Pole Dance est bien plus qu'un simple sport. C'est une forme d'expression artistique qui renforce le corps et l'esprit. En plus d'améliorer la force, la flexibilité et la coordination, elle booste également la confiance en soi et favorise le bien-être mental. Que vous soyez débutant ou expérimenté, la Pole Dance offre une expérience unique et gratifiante.",
				"Découvrez dès maintenant les bienfaits de la Pole Dance et plongez dans un monde de grâce, de puissance et d'épanouissement personnel !",
			],
			icon: <Sparkles className='w-10 h-10 text-[#84378d]' />,
			bgImage: '/IMG-20221124-WA0010.jpg',
		},
		{
			title: 'Pilates',
			question: 'Pourquoi le Pilates ?',
			paragraphs: [
				"Le Pilates est une méthode d'exercice qui vise à renforcer le corps dans sa globalité, en se concentrant principalement sur les muscles profonds, la posture et la respiration. En pratiquant le Pilates, on améliore la force, la flexibilité et la stabilité, tout en réduisant les risques de blessures et en favorisant une meilleure coordination.",
				'Découvrez dès maintenant les nombreux bienfaits du Pilates et laissez-vous guider vers une vie plus saine, plus équilibrée et plus dynamique.',
			],
			icon: <HeartPulse className='w-10 h-10 text-[#84378d]' />,
			bgImage: '/IMG-20221124-WA0011.jpg',
		},
		{
			title: 'Yoga',
			question: 'Pourquoi le Yoga ?',
			paragraphs: [
				"Le Yoga est bien plus qu'une simple pratique physique. C'est un chemin vers l'harmonie du corps, de l'esprit et de l'âme. En combinant postures, respirations et méditations, le Yoga favorise l'équilibre, la flexibilité et la paix intérieure. Que vous recherchiez la détente, la force physique ou la clarté mentale, le Yoga offre une multitude de bienfaits pour votre bien-être global.",
				'Découvrez dès maintenant les merveilles du Yoga et laissez-vous emporter dans un voyage de transformation et de découverte de soi.',
			],
			icon: <Flower2 className='w-10 h-10 text-[#84378d]' />,
			bgImage: '/IMG-20221124-WA0001.jpg',
		},
	];

	return (
		<section id='cours' className='py-24 bg-white'>
			<div className='container mx-auto px-4 md:px-6 max-w-7xl'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold tracking-tight text-[#84378d]'>
						Les cours
					</h2>
					<p className='mt-4 text-lg text-slate-600 max-w-2xl mx-auto'>
						Que vous souhaitiez vous dépasser, renforcer votre maintien au sol,
						ou simplement vous relaxer, trouvez le cours qui vous correspond.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{courses.map((course, idx) => (
						<div
							key={idx}
							className='relative p-8 rounded-3xl border border-rose-100 hover:shadow-2xl transition-all duration-500 flex flex-col items-center group overflow-hidden bg-cover bg-center'
							style={{ backgroundImage: `url('${course.bgImage}')` }}>
							{/* Calque / Overlay semi-transparent pour la lisibilité */}
							<div className='absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors duration-500'></div>

							{/* Contenu de la carte - On utilise z-10 pour passer par-dessus l'overlay */}
							<div className='relative z-10 flex flex-col items-center h-full w-full'>
								<div className='w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300'>
									{course.icon}
								</div>
								<h3 className='text-2xl font-bold text-[#84378d] mb-6 text-center'>
									{course.question}
								</h3>

								<div className='flex-1 flex flex-col space-y-4 mb-8'>
									{course.paragraphs.map((text, i) => (
										<p
											key={i}
											className='text-slate-800 leading-relaxed text-justify font-medium'>
											{text}
										</p>
									))}
								</div>

								<a
									href='#tarifs'
									className='mt-auto block w-full sm:w-auto px-8 py-3 rounded-full bg-white border-2 border-[#84378d] text-[#84378d] font-bold hover:bg-[#84378d] hover:text-white transition-colors duration-300 text-center shadow-sm'>
									Voir les tarifs
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
