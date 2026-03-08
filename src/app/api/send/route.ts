import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisation de Resend avec la variable d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const { nom, prenom, email, message } = await req.json();

		if (!nom || !prenom || !email || !message) {
			return NextResponse.json(
				{ error: 'Tous les champs sont requis.' },
				{ status: 400 },
			);
		}

		// Envoi réel de l'email via Resend
		const { data, error } = await resend.emails.send({
			from: 'Contact Site <onboarding@resend.dev>',
			// to: ['soniadancer0@gmail.com'], // l'adresse qui recevra les emails
			to: ['jacques.poulin64@gmail.com'], // l'adresse qui recevra les emails
			replyTo: email,
			subject: `Nouveau message de ${prenom} ${nom} depuis le site`,
			html: `<p><strong>De :</strong> ${prenom} ${nom}</p>
				   <p><strong>Email :</strong> ${email}</p>
				   <br/>
				   <p><strong>Message :</strong></p>
				   <p style="white-space: pre-wrap;">${message}</p>`,
		});

		if (error) {
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: 'Erreur interne du serveur' },
			{ status: 500 },
		);
	}
}
