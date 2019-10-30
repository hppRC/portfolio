import React from 'react';

export const Card: React.FC = ({ children }) => (
	<div style={{ backgroundColor: '#88658f' }}>
		<p>designed by card component</p>
		{children}
	</div>
);

export default Card;
