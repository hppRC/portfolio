const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve('src/templates/post.tsx');

		resolve(
			graphql(query).then(result => {
				if (result.errors) {
					return Promise.reject(result.errors);
				}

				const posts = result.data.allMarkdownRemark.edges;

				posts.forEach(({ node }) => {
					const path = node.frontmatter.path;

					createPage({
						path,
						component: postTemplate,
						context: {
							pathSlug: path
						}
					});
				});
			})
		);
	});
};

const query = `
query {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    path
                    title
                }
            }
        }
    }
}
`;
