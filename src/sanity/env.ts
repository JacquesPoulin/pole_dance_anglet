// src/sanity/env.ts

export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-08';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'votre_project_id';
// Pour info, je laisse 'votre_project_id' par défaut pour ne pas bloquer le build si vous n'avez pas encore votre compte.
export const useCdn = false;
