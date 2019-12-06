import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const Skills: React.FCX = ({ className }) => (
  <div className={className}>
    <h1>Skills</h1>
  </div>
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
