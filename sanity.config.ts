'use client';

// sanity.config.ts

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './src/sanity/schemaTypes';
import { projectId, dataset } from './src/sanity/env';

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	title: 'Pole Dance Anglet',

	plugins: [structureTool(), visionTool()],

	schema,
});
