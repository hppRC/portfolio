import React from 'react';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => (
	<div>
		<h3>My Wonderful Website Layout</h3>
		{children}
	</div>
);

export default Layout;
