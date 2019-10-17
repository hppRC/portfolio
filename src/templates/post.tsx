import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';

interface Props {
	data: {
		markdownRemark: {
			html: string;
			frontmatter: {
				date: string;
				title: string;
			};
		};
	};
}

export const Post: React.FC<Props> = ({ data }) => {
	const post = data.markdownRemark;
	const title = post.frontmatter.title;
	const date = post.frontmatter.date;
	const html = post.html;

	console.log(html);

	return (
		<Layout>
			<h1>{title}</h1>
			<p>{date}</p>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</Layout>
	);
};

export const query = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				date
				title
			}
		}
	}
`;

export default Post;
