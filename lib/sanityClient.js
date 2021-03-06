import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: 1,
	token: process.env.SANITY_API_TOKEN
});
