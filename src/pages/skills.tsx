import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import { StyledSkillCards as SkillCards } from '../internal/skills/skill-cards';
import baseStyle from '../styles/base-style';

const Skills: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Skills</h1>
    <SkillCards />
  </main>
);

const StyledSkills = styled(Skills)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Skills' pathname='/skills' />
    <StyledSkills />
  </>
);
