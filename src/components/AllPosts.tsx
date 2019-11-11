import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useAllPosts } from '../hooks';
import styled from '@emotion/styled';

const StyledArticle = styled.article`
	a {
		text-decoration: none;
		> div {
			color: #fff;
			padding: 2rem;
			transition: all 0.5s;
			:hover {
				opacity: 0.6;
			}
			div {
				border-radius: 5px;
				z-index: -1;
			}
		}
	}
`

export const AllPosts = () => (
	<section>
		{useAllPosts().map(({ id, excerpt, frontmatter }) => {
			console.log(frontmatter);
			const { slug, title, date, tags }: any = frontmatter;
			const fluid: any =
				frontmatter?.cover?.childImageSharp?.fluid;
			return (
				<StyledArticle key={id}>
					<Link to={`/posts/${slug}`}>
						<div>
							{fluid && (
								<Img fluid={fluid} alt={title}/>
							)}
							<h3>{title}</h3>
							<p>{date}</p>
							<p>{excerpt}</p>
						</div>
					</Link>
				</StyledArticle>
			);
		})}
	</section>
);

export default AllPosts;
