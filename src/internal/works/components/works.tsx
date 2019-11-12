import React from 'react';
import WorksMDX from '../documents/works.mdx';
import styled from '@emotion/styled';
import Test from '../gif/glitch.gif';

const Theme = styled.div``;

export const Works = () => (
	<Theme>
		<WorksMDX />
		<img src={Test} alt='' />
	</Theme>
);

export default Works;
