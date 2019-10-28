import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetaData';
import useSiteBuildTime from '../hooks/useSiteBuildTime';

interface Props {
	title: string;
	desc: string;
	banner: string;
	pathname: string;
	isArticle: boolean;
}

type SEOType = Partial<Props>;

export const SEO: React.FC<SEOType> = ({
	title = '',
	desc = '',
	banner = '',
	pathname = '',
	isArticle = false
}) => {
	const {
		title: defaultTitle,
		titleAlt,
		shortName,
		author,
		siteLanguage,
		logo,
		url: siteUrl,
		pathPrefix,
		description: defaultDescription,
		banner: defaultBanner,
		twitter
	} = useSiteMetadata();

	const buildTime = useSiteBuildTime();

	const seo = {
		title: title || defaultTitle,
		description: defaultDescription || desc,
		image: `${siteUrl}${banner || defaultBanner}`,
		url: `${siteUrl}${pathname || '/'}`
	};
	const realPrefix: string = pathPrefix === '/' ? '' : pathPrefix;

	let schemaOrgJSONLD: object[] = [
		{
			'@context': 'http://schema.org',
			'@type': 'WebSite',
			'@id': siteUrl,
			url: siteUrl,
			name: defaultTitle,
			alternateName: titleAlt || ''
		}
	];
	if (isArticle) {
		//記事用のJSONLDの記述
		schemaOrgJSONLD = [
			{
				'@context': 'http://schema.org',
				'@type': 'BlogPosting',
				'@id': seo.url,
				url: seo.url,
				name: title,
				alternateName: titleAlt || '',
				headline: title,
				image: {
					'@type': 'ImageObject',
					url: seo.image
				},
				description: seo.description,
				datePublished: buildTime,
				dateModified: buildTime,
				author: {
					'@type': 'Person',
					name: author
				},
				publisher: {
					'@type': 'Organization',
					name: author,
					logo: {
						'@type': 'ImageObject',
						url: siteUrl + realPrefix + logo
					}
				},
				isPartOf: siteUrl,
				mainEntityOfPage: {
					'@type': 'WebSite',
					'@id': siteUrl
				}
			}
		];
	}
	return (
		<Helmet>
			<html lang={siteLanguage} />
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<meta name='apple-mobile-web-app-title' content={shortName} />
			<meta name='application-name' content={shortName} />
			<script type='application/ld+json'>
				{JSON.stringify(schemaOrgJSONLD)}
			</script>

			{/* OpenGraph  */}
			<meta property='og:url' content={seo.url} />
			<meta
				property='og:type'
				content={isArticle ? 'article' : undefined}
			/>
			<meta property='og:title' content={seo.title} />
			<meta property='og:description' content={seo.description} />
			<meta property='og:image' content={seo.image} />

			{/* Twitter Card */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content={twitter} />
			<meta name='twitter:title' content={seo.title} />
			<meta name='twitter:description' content={seo.description} />
			<meta name='twitter:image' content={seo.image} />
		</Helmet>
	);
};

export default SEO;
