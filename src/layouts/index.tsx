import React from 'react';
import { Link } from 'gatsby';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => (
	<div>
		<Link to='/'>
			<h3>My Layout</h3>
		</Link>
		<Link to='/about'>About</Link>
		{children}
	</div>
);

export default Layout;
