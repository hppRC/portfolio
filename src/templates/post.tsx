import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layouts';
import TagList from '../components/TagList';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

interface Props {
	data: {
		mdx: {
			body: string;
			frontmatter: Frontmatter;
		};
	};
	pageContext: {
		prev: {
			frontmatter: Frontmatter;
		};
		next: {
			frontmatter: Frontmatter;
		};
	};
}

interface Frontmatter {
	path: string;
	date: string;
	title: string;
	tags: string[];
}

const Test = () => <h1>Test transferd</h1>;

const Components = {
	Test
};

export const Post: React.FC<Props> = ({ data, pageContext }) => {
	console.log(data);
	const post = data.mdx;
	const title = post.frontmatter.title;
	const date = post.frontmatter.date;
	const body = post.body;
	const { prev, next } = pageContext;

	return (
		<Layout>
			<h1>{title}</h1>
			<p>{date}</p>
			<MDXProvider components={Components}>
				<MDXRenderer>{body}</MDXRenderer>
			</MDXProvider>
			<TagList tags={post.frontmatter.tags || []} />
			<ul>
				{next && (
					<li key='next'>
						<Link to={next.frontmatter.path}>Next</Link>
					</li>
				)}
				{prev && (
					<li key='prev'>
						<Link to={prev.frontmatter.path}>Previous</Link>
					</li>
				)}
			</ul>
		</Layout>
	);
};

export const query = graphql`
	query($pathSlug: String!) {
		mdx(frontmatter: { path: { eq: $pathSlug } }) {
			body
			frontmatter {
				date
				title
				tags
			}
		}
	}
`;

export default Post;
