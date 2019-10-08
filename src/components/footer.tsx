import { Link } from 'gatsby';
import React from 'react';

interface Props {
	siteTitle: string;
}

export const Footer = ({ siteTitle = `` }: Props) => (
	<footer>
		<div>
			<h3>
				<Link to='/'>{siteTitle}</Link>© {new Date().getFullYear()},
			</h3>
			<p>
				Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>
			</p>
		</div>
	</footer>
);
