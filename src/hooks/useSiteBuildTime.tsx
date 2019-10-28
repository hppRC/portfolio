import { graphql, useStaticQuery } from 'gatsby';

interface Props {
	site: {
		buildTime: string;
	};
}

export const useSiteBuildTime = () => {
	const data = useStaticQuery<Props>(graphql`
		query {
			site {
				buildTime(formatString: "YYYY-MM-DD")
			}
		}
	`);

	return data.site.buildTime;
};

export default useSiteBuildTime;
