import React from 'react';
import { Link } from 'gatsby';

interface Props {
	siteTitle: string;
}

export const Footer: React.FC<Props> = ({ siteTitle = `` }) => (
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