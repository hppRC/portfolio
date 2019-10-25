import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface Props {
	allMdx: {
		edges: [
			{
				node: {
					id: string;
					excerpt: string;
					frontmatter: {
						slug: string;
						date: string;
						title: string;
						tags: string[];
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
}

export const Posts = () => (
	<StaticQuery
		query={query}
		render={({ allMdx: { edges } }: Props) => (
			<div>
				{edges.map(({ node }) => (
					<div key={node.id}>
						{node.frontmatter.cover && (
							<Img
								fluid={
									node.frontmatter.cover.childImageSharp.fluid
								}
								alt={node.frontmatter.title}
							/>
						)}
						<h3>{node.frontmatter.title}</h3>
						<p>{node.frontmatter.date}</p>
						<p>{node.excerpt}</p>
						<Link to={`/posts/${node.frontmatter.slug}`}>
							<h3>{node.frontmatter.title}</h3>
						</Link>
					</div>
				))}
			</div>
		)}
	/>
);

const query = graphql`
	query Posts {
		allMdx {
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
`;

export default Posts;
