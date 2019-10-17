import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layouts';

export const Index: React.FC<Props> = ({ data }) => {
	const { edges } = data.allMdx;
	return (
		<Layout>
			<h1>Gatsby Tutorial Home Page</h1>
			{edges.map(({ node }) => (
				<div key={node.id}>
					<h3>{node.frontmatter.title}</h3>
					<p>{node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
					<Link to={node.frontmatter.path}>
						<h3>{node.frontmatter.title}</h3>
					</Link>
				</div>
			))}
		</Layout>
	);
};

interface Props {
	data: {
		allMdx: {
			edges: [
				{
					node: {
						id: string;
						excerpt: string;
						frontmatter: {
							title: string;
							date: string;
							path: string;
						};
					};
				}
			];
		};
	};
}

export const query = graphql`
	query {
		allMdx(filter: { frontmatter: { status: { eq: "published" } } }) {
			edges {
				node {
					id
					excerpt
					frontmatter {
						title
						date(formatString: "YYYY年MM月DD日")
						path
					}
				}
			}
		}
	}
`;

export default Index;
