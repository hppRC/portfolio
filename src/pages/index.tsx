import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';

export const Index: React.FC<Props> = ({ data }) => {
	const { edges } = data.allMarkdownRemark;
	return (
		<Layout>
			<h1>Gatsby Tutorial Home Page</h1>
			{edges.map(({ node }) => (
				<div key={node.id}>
					<h3>{node.frontmatter.title}</h3>
					<p>{node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
				</div>
			))}
		</Layout>
	);
};

interface Props {
	data: {
		allMarkdownRemark: {
			edges: [
				{
					node: {
						id: string;
						excerpt: string;
						frontmatter: {
							title: string;
							date: string;
						};
					};
				}
			];
		};
	};
}

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { status: { eq: "published" } } }
		) {
			edges {
				node {
					id
					excerpt
					frontmatter {
						title
						date
					}
				}
			}
		}
	}
`;

export default Index;
