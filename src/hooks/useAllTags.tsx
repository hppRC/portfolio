import { graphql, useStaticQuery } from 'gatsby';

type Props = {
	allMdx: {
		edges: [
			{
				node: {
					frontmatter: {
						tags: string[];
					};
				};
			}
		];
	};
};

export const useAllTags = () => {
	const data = useStaticQuery<Props>(graphql`
		query {
			allMdx {
				edges {
					node {
						frontmatter {
							tags
						}
					}
				}
			}
		}
	`);

	const posts = data.allMdx.edges;

	const postsByTag: {
		[key: string]: object[];
	} = {};

	posts.forEach(({ node }) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.forEach(tag => {
				if (!postsByTag[tag]) {
					postsByTag[tag] = [];
				}
				postsByTag[tag].push(node);
			});
		}
	});

	return Object.keys(postsByTag);
};

export default useAllTags;
