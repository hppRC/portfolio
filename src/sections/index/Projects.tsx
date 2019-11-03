import React from 'react';
import ProjectsMDX from './intro.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
`;

export const Projects = () => (
	<Theme>
		<ProjectsMDX />
	</Theme>
);

export default Projects;
