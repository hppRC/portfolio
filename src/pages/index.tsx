import React from 'react';
import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import Layout from '../layouts';

export const Index: React.FC<Props> = ({ data }) => {
	const { edges } = data.allMdx;
	return (
		<Layout>
			<h1>Gatsby Tutorial Home Page</h1>
			{edges.map(({ node }) => (
				<div key={node.id}>
					{console.log(node.frontmatter.cover)}
					<Img
						fluid={node.frontmatter.cover.childImageSharp.fluid}
						alt={node.frontmatter.title}
					/>
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
							cover: {
								childImageSharp: {
									fluid: FluidObject;
								};
							};
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
					excerpt(pruneLength: 100)
					frontmatter {
						title
						date(formatString: "YYYY年MM月DD日")
						path
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
`;

export default Index;
