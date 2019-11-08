import { graphql, useStaticQuery } from 'gatsby';
import { UseSiteBuildTimeQuery } from '../../types/graphql-types.d';

export const useSiteBuildTime = (): string => {
	const data = useStaticQuery<UseSiteBuildTimeQuery>(graphql`
		query useSiteBuildTime {
			site {
				buildTime(formatString: "YYYY-MM-DD")
			}
		}
	`);

	return data?.site?.buildTime;
};

export default useSiteBuildTime;
