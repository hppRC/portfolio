/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/*
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	// you only want to operate on `Mdx` nodes. If you had content from a
	// remote CMS you could also check to see if the parent node was a
	// `File` node here
	if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode });

		createNodeField({
			// Name of the field you are adding
			name: 'slug',
			// Individual MDX node
			node,
			// Generated value based on filepath with "blog" prefix. you
			// don't need a separating "/" before the value because
			// createFilePath returns a path with the leading "/".
			value: `/blog${value}`
		});
	}
};
*/
