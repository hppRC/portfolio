const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'My Wonderful Website',
		description: 'Welcome to your brilliant website.',
		author: 'Super Cool Developer'
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-catch-links`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/posts`
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 690,
							quality: 90,
							linkImagesToOriginal: true
						}
					}
				]
			}
		},
		`gatsby-plugin-netlify-cms`
	]
};
