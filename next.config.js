require('dotenv').config();

module.exports = {
	reactStrictMode: true,
	env: {
		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
		SANITY_API_TOKEN: process.env.SANITY_API_TOKEN
	}
};
