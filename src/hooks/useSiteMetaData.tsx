import { graphql, useStaticQuery } from 'gatsby';

type Props = {
	site: {
		siteMetadata: {
			[key: string]: string;
		};
	};
};

const useSiteMetadata = () => {
	const data = useStaticQuery<Props>(graphql`
		query {
			site {
				siteMetadata {
					title
					titleAlt
					shortName
					author
					siteLanguage
					logo
					url
					pathPrefix
					description
					banner
					twitter
				}
			}
		}
	`);

	return data.site.siteMetadata;
};

export default useSiteMetadata;
