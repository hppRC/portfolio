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
			transition: all 0.3s ease 0s;
			:hover {
				box-shadow: 0 3px 6px 0 #000;
				transform: translateY(-0.1875em);

				::before {
					position: absolute;
					content: '';
					display: block;

					border-radius: 5px;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					background: rgba(255, 255, 255, 0.1);
				}
			}

			div {
				border-radius: 5px;
				z-index: -1;

				:nth-of-type(2) {
					padding: 1.5rem;
					h2 {
						padding: 0 0 1rem 0;
					}
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		a > div {
			box-shadow: 0px 3px 10px 0px #000;
		}
	}
`;

export const AllPosts = () => (
	<section>
		{useAllPosts().map(({ id, excerpt, frontmatter }) => {
			const { slug, title, date, tags }: any = frontmatter;
			const fluid: any = frontmatter?.cover?.childImageSharp?.fluid;
			return (
				<StyledArticle key={id}>
					<Link to={`/posts/${slug}`}>
						<div>
							{fluid && <Img fluid={fluid} alt={title} />}
							<div>
								<h2>{title}</h2>
								<p>{date}</p>
								<p>{excerpt}</p>
							</div>
						</div>
					</Link>
				</StyledArticle>
			);
		})}
	</section>
);

export default AllPosts;
