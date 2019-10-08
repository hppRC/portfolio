import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Props {
	description: string;
	lang?: string;
	meta?: [];
	keywords?: string[];
	title: string;
	locale?: string;
}

export function SEO({
	description,
	lang = `ja`,
	meta = [],
	keywords = [],
	title,
	locale = `ja_JP`
}: Props) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={data => {
				const metaDescription =
					description || data.site.siteMetadata.description;
				return (
					<Helmet
						htmlAttributes={{
							lang
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: `description`,
								content: metaDescription
							},
							{
								property: `og:url`,
								content: data.site.siteMetadata.siteUrl
							},
							{
								property: `og:title`,
								content: title
							},
							{
								property: `og:description`,
								content: metaDescription
							},
							{
								property: `og:type`,
								content: `website`
							},
							{
								property: `og:locale`,
								content: locale
							},
							{
								name: `twitter:card`,
								content: `summary`
							},
							{
								name: `twitter:creator`,
								content: data.site.siteMetadata.author
							},
							{
								name: `twitter:title`,
								content: title
							},
							{
								name: `twitter:description`,
								content: metaDescription
							},
							{
								name: `twitter:site`,
								content: data.site.siteMetadata.social.twitter
							}
						]
							.concat(
								keywords.length > 0
									? {
											name: `keywords`,
											content: keywords.join(`, `)
									  }
									: []
							)
							.concat(meta)}
					/>
				);
			}}
		/>
	);
}

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
				siteUrl
				social {
					twitter
				}
			}
		}
	}
`;