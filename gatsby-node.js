const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve('src/templates/post.tsx');
		const tagPage = path.resolve('src/pages/tags.tsx');
		const tagPosts = path.resolve('src/templates/tag.tsx');

		resolve(
			graphql(query).then(result => {
				if (result.errors) {
					return Promise.reject(result.errors);
				}

				const posts = result.data.allMarkdownRemark.edges;

				const postsByTag = {};

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

				const tags = Object.keys(postsByTag);

				//各タグそれぞれの一覧ページ
				tags.forEach(tagName => {
					const posts = postsByTag[tagName];
					createPage({
						path: `/tags/${tagName}`,
						component: tagPosts,
						context: {
							posts,
							tagName
						}
					});
				});

				//tag一覧ページ
				createPage({
					path: '/tags',
					component: tagPage,
					context: {
						tags: tags.sort()
					}
				});

				//投稿記事それぞれのページ作成
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
					tags
				}
			}
		}
	}
}
`;
