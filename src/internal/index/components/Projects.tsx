import React from 'react';
import ProjectsMDX from '../documents/projects.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';

const Theme = styled(BaseTheme)``;

export const Projects = () => (
	<Theme>
		<ProjectsMDX />
	</Theme>
);

export default Projects;
