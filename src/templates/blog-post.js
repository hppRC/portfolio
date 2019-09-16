import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const Meta = ({ post }) => {
	const origin = 'http://hpprc.com';

	return (
		<Helmet
			title={`${post.frontmatter.title} | Blog`}
			meta={[
				{ name: 'description', content: post.frontmatter.description },
				{ property: 'og:title', content: post.frontmatter.title },
				{
					property: 'og:description',
					content: post.frontmatter.description
				},
				{
					property: 'og:image',
					content: `${origin}${post.frontmatter.image}`
				}
			]}
		/>
	);
};

export const BlogPostTemplate = ({
	content,
	contentComponent,
	description,
	tags,
	title,
	helmet,
	ogpPath
}) => {
	const PostContent = contentComponent || Content;

	return (
		<section className='section'>
			{helmet || ''}
			<div className='container content'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
							{title}
						</h1>
						<p>{description}</p>
						<h1>{ogpPath || 'fuck'}</h1>
						<img src={ogpPath} alt='ogp' />
						<PostContent content={content} />
						{tags && tags.length ? (
							<div style={{ marginTop: `4rem` }}>
								<h4>Tags</h4>
								<ul className='taglist'>
									{tags.map(tag => (
										<li key={tag + `tag`}>
											<Link
												to={`/tags/${kebabCase(tag)}/`}
											>
												{tag}
											</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
	ogpPath: PropTypes.string
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;
	console.log(post);
	return (
		<Layout>
			<BlogPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={<Meta post={post} />}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
				ogpPath={post.frontmatter.image}
			/>
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}
	}
`;
