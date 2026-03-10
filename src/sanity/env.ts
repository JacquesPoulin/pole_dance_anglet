// src/sanity/env.ts

export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-08';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fufb4bda'; // Remplacé par votre vrai projectId
// J'ai mis votre vrai projectId au lieu de 'votre_project_id' pour éviter l'erreur de build.
export const useCdn = false;
