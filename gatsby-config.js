const config = require('./config/site');

module.exports = {
	siteMetadata: {
		pathPrefix: `/`,
		title: `hpp Portfolio`, // タイトル
		titleAlt: `My Wonderful Website`, // JSONLDのためのタイトル
		description: `Welcome to my brilliant website.`,
		url: `https://hpprc.com`, // スラッシュなしのサイトURL
		siteUrl: `https://hpprc.com/`, // スラッシュありのサイトURL
		siteLanguage: `ja`, // HTMLの言語（ここでは日本語）
		icon: `src/images/icon.png`,
		logo: `src/images/icon.png`,
		banner: `src/images/icon.png`,
		shortName: `hppPortfolio`, // サイトの略称、12文字以下
		author: `hpprc`,
		themeColor: `#3e7bf2`,
		backgroundColor: `#d3e0ff`,
		twitter: `@osaremochi` // TwitterのID
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-catch-links`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`, // this entry has to be the first or will not work as per FAQ
			options: {
				path: `${__dirname}/static/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/content/posts`
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					`gatsby-remark-relative-images`,
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
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.tsx`, // for custom preview in the Netlify CMS
				enableIdentityWidget: false,
				publicPath: 'admin',
				htmlTitle: 'Content Manager',
				manualInit: true
			}
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				allPageHeaders: [
					`Link: </manifest.webmanifest>; rel=preload; as=script`,
					`Link: </page-data/app-data.json>; rel=preload; as=script`
				]
			}
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.title,
				short_name: config.shortName,
				description: config.description,
				Scope: `/`,
				start_url: `/?utm_source=homescreen`,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: `standalone`,
				icon: config.icon
			}
		},
		`gatsby-plugin-offline`
	]
};
