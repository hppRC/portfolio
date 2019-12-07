import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { StyledSkillCards as SkillCards } from '../internal/skills/skill-cards';

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
