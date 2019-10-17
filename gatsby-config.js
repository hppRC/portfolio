module.exports = {
	siteMetadata: {
		title: 'My Wonderful Website',
		description: 'Welcome to your brilliant website.',
		author: 'Super Cool Developer'
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-catch-links`,
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
				extensions: [`.mdx`, `.md`]
			}
		},
		`gatsby-plugin-netlify-cms`
	]
};
