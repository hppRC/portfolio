module.exports = {
	siteMetadata: {
		title: `hpp Portfolio`,
		description: `hpp's Portfolio & blog`,
		author: `hpp`,
		siteUrl: `https://hpprc.com/`,
		social: {
			twitter: `@osaremochi`
		}
	},
	plugins: [
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
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048
						}
					},
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							name: 'uploads'
						}
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
						options: {
							destinationDir: 'static'
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {}
					},
					{
						resolve: `gatsby-remark-smartypants`
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false
						}
					}
				]
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
				// This path is relative to the root of the site.
				// gatsby-plugin-manifest generate icons(for PWA) based on the image(path is bellow)
				icon: `src/images/icon.png`
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		//this modules should be used after `gatsby-plugin-manifest`.
		`gatsby-plugin-offline`,

		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.js` // for custom preview in the Netlify CMS
			}
		},

		//seo plugins
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://hpprc.com`
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://hpprc.com',
				sitemap: 'https://hpprc.com/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: `UA-149661454-1`
			}
		},

		//development assistants plugins
		{
			resolve: `gatsby-plugin-lodash`,
			options: {
				disabledFeatures: [
					`shorthands`, // Iteratee shorthands for _.property, _.matches, & _.matchesProperty.
					`cloning`, //	Support “clone” methods & cloning source objects.
					`currying`, //	Support “curry” methods.
					`caching`, //	Caches for methods like _.cloneDeep, _.isEqual, & _.uniq.
					`collections`, //	Support objects in “Collection” methods.
					`exotics`, //	Support objects like buffers, maps, sets, symbols, typed arrays, etc.
					`guards`, //	Guards for host objects, sparse arrays, & other edge cases.
					`metadata`, //	Metadata to reduce wrapping of bound, curried, & partially applied functions.(requires currying)
					`deburring`, //	Support deburring letters.
					`unicode`, //	Support Unicode symbols.
					`chaining`, //	Components to support chain sequences.
					`memoizing`, //	Support _.memoize & memoization.
					`coercions`, //	Support for coercing values to integers, numbers, & strings.
					`flattening`, //	Support “flatten” methods & flattening rest arguments.
					`paths`, //	Deep property path support for methods like _.get, _.has, & _.set.
					`placeholders` //	Argument placeholder support for “bind”, “curry”, & “partial” methods.,(requires currying),
				]
			}
		},
		`gatsby-plugin-catch-links`
	]
};
