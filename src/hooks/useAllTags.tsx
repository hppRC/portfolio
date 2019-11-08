import { graphql, useStaticQuery } from 'gatsby';
import { UseAllTagsQuery } from '../../types/graphql-types.d';

export const useAllTags = () => {
	const data = useStaticQuery<UseAllTagsQuery>(graphql`
		query useAllTags {
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
		if (node?.frontmatter?.tags) {
			node?.frontmatter?.tags.forEach((tag : string | null) => {
				if (typeof tag === 'string') {
					if (!postsByTag[tag]) {
						postsByTag[tag] = [];
					}
					postsByTag[tag].push(node);
				}
			});
		}
	});

	return Object.keys(postsByTag);
};

export default useAllTags;
