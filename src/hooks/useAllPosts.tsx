import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

interface Props {
	allMdx: {
		edges: [
			{
				node: Node;
			}
		];
	};
}
interface Node {
	id: string;
	excerpt: string;
	frontmatter: Frontmatter;
}

interface Frontmatter {
	slug: string;
	date: string;
	title: string;
	tags: string[];
	cover: {
		childImageSharp: {
			fluid: FluidObject;
		};
	};
}

export const useAllPosts = () => {
	const data = useStaticQuery<Props>(graphql`
		query {
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
	const allPosts: Node[] = [];

	posts.forEach(({ node }) => {
		allPosts.push(node);
	});

	return allPosts;
};

export default useAllPosts;
