import { graphql, useStaticQuery } from 'gatsby';
import {
	UseSiteMetadataQuery,
	SiteSiteMetadata
} from '../../types/graphql-types.d';

export const useSiteMetadata = () => {
	const data = useStaticQuery<UseSiteMetadataQuery>(graphql`
		query useSiteMetadata {
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

	return data?.site?.siteMetadata;
};

export default useSiteMetadata;
