import React, { FC } from 'react';
import { Link } from 'gatsby';

interface Props {
	siteTitle: string;
}

export const Header: FC<Props> = ({ siteTitle = `` }) => (
	<header>
		<div>
			<h1>
				<Link to='/'>{siteTitle}</Link>
			</h1>
		</div>
	</header>
);
