const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve('src/templates/post.tsx');
		const tagPosts = path.resolve('src/templates/tag.tsx');

		resolve(
			graphql(
				`
					query {
						allMdx(
							sort: { order: ASC, fields: [frontmatter___date] }
						) {
							edges {
								node {
									frontmatter {
										slug
										date
										title
										tags
									}
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					return Promise.reject(result.errors);
				}

				const posts = result.data.allMdx.edges;

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

				posts.forEach(({ node }, index) => {
					const slug = node.frontmatter.slug;
					const prev = index === 0 ? null : posts[index - 1].node;
					const next =
						index === posts.length - 1
							? null
							: posts[index + 1].node;

					createPage({
						path: `/posts/${slug}`,
						component: postTemplate,
						context: {
							slug,
							prev,
							next
						}
					});
				});
			})
		);
	});
};

//thanks to https://github.com/gatsbyjs/gatsby/issues/12610
exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node);
	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value
		});
	}
};

// to avoid making path "/index/" instead of "/" with index directory
// see https://github.com/gatsbyjs/gatsby/issues/7363
exports.onCreatePage = ({ page, actions }) => {
	const { deletePage, createPage } = actions;

	return new Promise(resolve => {
		if (page.componentPath === `${__dirname}/src/pages/index/index.tsx`) {
			deletePage(page);

			// create a new page but with '/' as path
			createPage({
				...page,
				path: '/'
			});
		}

		resolve();
	});
};
