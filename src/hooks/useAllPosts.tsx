import { graphql, useStaticQuery } from 'gatsby';
import { UseAllPostsQuery } from '../../types/graphql-types.d';

export const useAllPosts = () => {
	const data = useStaticQuery<UseAllPostsQuery>(graphql`
		query UseAllPosts {
			allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
				edges {
					node {
						id
						excerpt(pruneLength: 100)
						frontmatter {
							slug
							date(formatString: "YYYY-MM-DD")
							title
							tags
							cover {
								childImageSharp {
									fluid(maxWidth: 1000, quality: 90) {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	const posts = data.allMdx.edges;
	const allPosts = posts.map(({ node }) => node);

	return allPosts;
};

export default useAllPosts;
