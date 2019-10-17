import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import TagList from '../components/TagList';

interface Props {
	data: {
		markdownRemark: {
			html: string;
			frontmatter: {
				date: string;
				title: string;
				tags: string[];
			};
		};
	};
}

export const Post: React.FC<Props> = ({ data }) => {
	console.log(data);
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
			<TagList tags={post.frontmatter.tags || []} />
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
				tags
			}
		}
	}
`;

export default Post;
