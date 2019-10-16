module.exports = {
	siteMetadata: {
		title: 'My Wonderful Website',
		description: 'Welcome to your brilliant website.',
		author: 'Super Cool Developer'
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-catch-links`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/posts`
			}
		}
	]
};
