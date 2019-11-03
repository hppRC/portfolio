import React from 'react';
import styled from '@emotion/styled';
import { BackgroundArt } from './backbround-art';

const BackgroundTheme = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
`;

export const Background = () => (
	<BackgroundTheme>
		<BackgroundArt />
	</BackgroundTheme>
);

export default Background;
