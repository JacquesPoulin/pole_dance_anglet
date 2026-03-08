'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

// Schema de validation strict avec Zod
const contactSchema = z.object({
	nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
	prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
	email: z.string().email('Adresse email invalide'),
	message: z.string().min(10, 'Le message est trop court (min. 10 caractères)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			if (!response.ok) throw new Error('Erreur réseau');

			toast.success('Votre message a été envoyé avec succès !');
			reset();
		} catch (error) {
			toast.error("Oups, une erreur est survenue lors de l'envoi.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id='contact'
			className='py-24 relative bg-cover bg-center bg-fixed px-4'
			style={{ backgroundImage: "url('/IMG-20221124-WA0006.jpg')" }}>
			{/* Overlay blanc semi-transparent pour garder le texte lisible */}
			<div className='absolute inset-0 bg-white/90'></div>

			<Toaster position='bottom-right' />
			<div className='max-w-3xl mx-auto text-center relative z-10'>
				<h2 className='text-4xl font-bold mb-4 text-[#84378d]'>
					Contactez-moi
				</h2>
				<p className='text-[#84378d] mb-12'>
					Posez vos questions ou réservez votre cours / EVJF directement ici, ou
					par téléphone au <strong>06 63 46 71 86</strong>.
				</p>

				<form
					autoComplete='off'
					suppressHydrationWarning
					onSubmit={handleSubmit(onSubmit)}
					className='max-w-xl mx-auto flex flex-col gap-6 text-left'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label className='block text-sm font-medium text-[#84378d] mb-1'>
								Nom
							</label>
							<input
								{...register('nom')}
								type='text'
								suppressHydrationWarning
								className='w-full rounded-md border-rose-200 shadow-sm focus:border-[#84378d] bg-inherit focus:ring-[#84378d] py-3 px-4 border outline-none transition-shadow text-slate-800 placeholder-slate-400'
								placeholder='Votre nom'
							/>
							{errors.nom && (
								<span className='text-rose-600 text-sm mt-1 block'>
									{errors.nom.message}
								</span>
							)}
						</div>

						<div>
							<label className='block text-sm font-medium text-[#84378d] mb-1'>
								Prénom
							</label>
							<input
								{...register('prenom')}
								type='text'
								suppressHydrationWarning
								className='w-full rounded-md border-rose-200 shadow-sm focus:border-[#84378d] bg-inherit focus:ring-[#84378d] py-3 px-4 border outline-none transition-shadow text-slate-800 placeholder-slate-400'
								placeholder='Votre prénom'
							/>
							{errors.prenom && (
								<span className='text-rose-600 text-sm mt-1 block'>
									{errors.prenom.message}
								</span>
							)}
						</div>
					</div>

					<div>
						<label className='block text-sm font-medium text-[#84378d] mb-1'>
							Email
						</label>
						<input
							{...register('email')}
							type='email'
							suppressHydrationWarning
							className='w-full rounded-md border-rose-200 shadow-sm focus:border-[#84378d] bg-inherit focus:ring-[#84378d] py-3 px-4 border outline-none transition-shadow text-slate-800 placeholder-slate-400'
							placeholder='votre.email@exemple.com'
						/>
						{errors.email && (
							<span className='text-rose-600 text-sm mt-1 block'>
								{errors.email.message}
							</span>
						)}
					</div>

					<div>
						<label className='block text-sm font-medium text-[#84378d] mb-1'>
							Message{' '}
							<span className='text-slate-500 font-normal'>
								(Spécifiez la date pour un EVJF)
							</span>
						</label>
						<textarea
							{...register('message')}
							rows={5}
							suppressHydrationWarning
							className='w-full rounded-md border-rose-200 shadow-sm focus:border-[#84378d] bg-inherit focus:ring-[#84378d] py-3 px-4 border outline-none transition-shadow resize-none text-slate-800 placeholder-slate-400'
							placeholder="N'hésitez pas à me donner un maximum de détails pour que je puisse vous répondre au mieux !"
						/>
						{errors.message && (
							<span className='text-rose-600 text-sm mt-1 block'>
								{errors.message.message}
							</span>
						)}
					</div>

					<button
						type='submit'
						disabled={isSubmitting}
						suppressHydrationWarning
						className='w-full bg-[#84378d] text-white font-bold py-4 rounded-md hover:bg-pink-600 transition flex justify-center items-center gap-2 disabled:bg-rose-300 cursor-pointer'>
						{isSubmitting && <Loader2 className='w-5 h-5 animate-spin' />}
						{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
					</button>
				</form>
			</div>
		</section>
	);
}
