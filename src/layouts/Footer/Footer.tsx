import React from 'react';
import styled from '@emotion/styled';

const ThemedFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 10vh;
	color: #fff;
`;

export const Footer = () => (
	<ThemedFooter>
		<p>Copyright © 2019 hppRC All Rights Reserved.</p>
	</ThemedFooter>
);

export default Footer;
