module.exports = {
	siteMetadata: {
		title: `Gatsby-MDX + Netlify-CMS Starter`,
		description: `Starter for Gatsby-MDX + Netlify CMS`,
		author: `hpp`,
		siteUrl: `https://hpprc.com/`,
		social: {
			twitter: `@osaremochi`
		}
	},
	plugins: [
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-mdx`,
			options: {
				extensions: ['.mdx', '.md'],
				defaultLayouts: {
					// This entry template will switch the page template based on
					// a frontmatter value provided in the CMS, allowing users to
					// choose different template layouts.
					default: require.resolve(
						`${__dirname}/src/page-templates/cms-entry.tsx`
					)
				}
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `hpp portfolio`,
				short_name: `hppRC`,
				theme_color: `#0b0b0b`,
				background_color: `#0b0b0b`,
				display: `standalone`,
				Scope: `/`,
				start_url: `/?utm_source=homescreen`,
				icons: [
					{
						src: `icons/icon-72x72.png`,
						sizes: `72x72`,
						type: `image/png`
					},
					{
						src: `icons/icon-96x96.png`,
						sizes: `96x96`,
						type: `image/png`
					},
					{
						src: `icons/icon-128x128.png`,
						sizes: `128x128`,
						type: `image/png`
					},
					{
						src: `icons/icon-144x144.png`,
						sizes: `144x144`,
						type: `image/png`
					},
					{
						src: `icons/icon-152x152.png`,
						sizes: `152x152`,
						type: `image/png`
					},
					{
						src: `icons/icon-192x192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `icons/icon-384x384.png`,
						sizes: `384x384`,
						type: `image/png`
					},
					{
						src: `icons/icon-512x512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				],
				splash_pages: null
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.js` // for custom preview in the Netlify CMS
			}
		}
	]
};
