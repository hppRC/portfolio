import React from 'react';
import styled from '@emotion/styled';

const Theme = styled.div`
	width: 100vw;

	color: #fff;
`;

export const Header = () => (
	<Theme>
		<h1>This is header component</h1>
	</Theme>
);

export default Header;
