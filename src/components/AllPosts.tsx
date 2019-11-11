import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useAllPosts } from '../hooks';


export const AllPosts = () => (
	<section>
		{useAllPosts().map(({ id, excerpt, frontmatter }) => {
			console.log(frontmatter);
			const { slug, title, date, tags }: any = frontmatter;
			const fluid: any =
				frontmatter?.cover?.childImageSharp?.fluid;
			return (
				<article key={id}>
					{fluid && (
						<Img fluid={fluid} alt={title} style={{ zIndex:"-1" }}/>
					)}
					<h3>{title}</h3>
					<p>{date}</p>
					<p>{excerpt}</p>
					<Link to={`/posts/${slug}`}>
						<h3>{title}</h3>
					</Link>
				</article>
			);
		})}
	</section>
);

export default AllPosts;
