import { Link } from 'gatsby';
import React from 'react';

interface Props {
	siteTitle: string;
}

export const Header = ({ siteTitle = `` }: Props) => (
	<header>
		<div>
			<h1>
				<Link to='/'>{siteTitle}</Link>
			</h1>
		</div>
	</header>
);
