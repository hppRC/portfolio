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
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

type Props = {
	data: PostTemplateQuery;
	pageContext: SitePageContext;
}

const StyledArticle = styled.article`
	min-height: 100vh;
	list-style-position: inside;

	div {
		border-radius: 5px;
		z-index: -1;
	}
`

const BodyTheme = styled.div`
	padding: 5rem 0;
	p {
		z-index: -1;
		span {
			padding: 2rem;
			a {
				span {
					display: none !important;
				}
				img {
					border-radius: 5px;
					width: 100%;
				}
			}
		}
	}
`


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
			<PageBaseTheme>
				<StyledArticle>
					<h1>{title}</h1>
					<p>{date}</p>
					<Img fluid={fluid} alt={title} backgroundColor={"#fff"} />
					<BodyTheme>
						<MDXProvider
						components={{ ...MdxComponents, ...MdxScope }}
						scope={{ ...MdxScope }}>
							<MDXRenderer>{body}</MDXRenderer>
						</MDXProvider>
					</BodyTheme>
					<TagList tags={tags ?? []} />
					<PrevAndNext prev={prev} next={next} />
				</StyledArticle>
			</PageBaseTheme>
		</Layout>
	);
};

const PrevAndNextTheme = styled.ul`
	display: flex;

	list-style: none;
	li a {
		text-decoration: none;
		color: #fff;
		transition: all 0.5s;
		:hover {
			opacity: 0.6;
		}
	}
`

const PrevAndNext: React.FC<SitePageContext> = ({ prev, next }) => (
	<PrevAndNextTheme>
		{next && (
			<li key='next'>
				<Link to={`/posts/${next?.frontmatter?.slug}`}>{"Next >>"}</Link>
			</li>
		)}
		{prev && (
			<li key='prev'>
				<Link to={`/posts/${prev?.frontmatter?.slug}`}>{"<< Previous"}</Link>
			</li>
		)}
	</PrevAndNextTheme>
);


const TagListTheme = styled.ul`
	display: flex;
	list-style: inside;
	color: #09090f;
	li {
		background-color: #fff;
		border-radius: 5px;
		padding: 0.2rem 1rem;
		transition: all 0.5s;
		:hover {
			opacity: 0.6;
		}
		a {
			text-decoration: none;
			color: #09090f;
			font-weight: bold;
			font-family: 'American Typewriter','Superclarendon',sans-serif;
		}
	}
`


export const TagList: React.FC<{ tags: string[] }> = ({ tags }) => (
	<TagListTheme>
		{tags.map(tag => (
			<li key={tag}>
				<Link to={`/tags/${tag}`}>{tag}</Link>
			</li>
		))}
	</TagListTheme>
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
