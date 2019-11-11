import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../layouts';
import { SEO } from '../components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Img from 'gatsby-image';
import * as MdxComponents from '../mdx/components';
import * as MdxScope from '../mdx/scope';
import {
	PostTemplateQuery,
	SitePageContext,
} from '../../types/graphql-types.d';

type Props = {
	data: PostTemplateQuery;
	pageContext: SitePageContext;
}

export const Post: React.FC<Props> = ({ data, pageContext }) => {
	const post = data.mdx;
	const body = post?.body;
	const description = post?.excerpt ?? ' ';
	const { slug, title, date, tags }: any = post?.frontmatter;
	const fluid: any =
		post?.frontmatter?.cover?.childImageSharp?.fluid;
	const { prev, next } = pageContext;

	return (
		<Layout>
			<SEO
				title={title}
				desc={description}
				banner={fluid?.src}
				pathname={`/posts/${slug}`}
				isArticle
			/>
			<article>
				<h1>{title}</h1>
				<p>{date}</p>
				<Img fluid={fluid} alt={title} />
				<MDXProvider
				components={{ ...MdxComponents, ...MdxScope }}
				scope={{ ...MdxScope }}>
					<MDXRenderer>{body}</MDXRenderer>
				</MDXProvider>
				<TagList tags={tags ?? []} />
				<PrevAndNext prev={prev} next={next} />
			</article>
		</Layout>
	);
};

const PrevAndNext: React.FC<SitePageContext> = ({ prev, next }) => (
	<ul>
		{next && (
			<li key='next'>
				<Link to={`/posts/${next?.frontmatter?.slug}`}>Next</Link>
			</li>
		)}
		{prev && (
			<li key='prev'>
				<Link to={`/posts/${prev?.frontmatter?.slug}`}>Previous</Link>
			</li>
		)}
	</ul>
);

export const TagList: React.FC<{ tags: string[] }> = ({ tags }) => (
	<ul>
		{tags.map(tag => (
			<li key={tag}>
				<Link to={`/tags/${tag}`}>{tag}</Link>
			</li>
		))}
	</ul>
);

export const query = graphql`
	query PostTemplate($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			body
			excerpt
			frontmatter {
				slug
				date
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
`;

export default Post;
