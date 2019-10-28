import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useAllPosts } from '../hooks';

export const AllPosts = () => (
	<div>
		{useAllPosts().map(
			({ id, excerpt, frontmatter: { cover, title, date, slug } }) => (
				<div key={id}>
					{cover && (
						<Img fluid={cover.childImageSharp.fluid} alt={title} />
					)}
					<h3>{title}</h3>
					<p>{date}</p>
					<p>{excerpt}</p>
					<Link to={`/posts/${slug}`}>
						<h3>{title}</h3>
					</Link>
				</div>
			)
		)}
	</div>
);

export default AllPosts;
