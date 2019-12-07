import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { StyledIntroduction as Introduction } from '../internal/about';

const About: React.FCX = ({ className }) => (
  <main className={className}>
    <Introduction />
  </main>
);

const StyledAbout = styled(About)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='About' pathname='/about' />
    <StyledAbout />
  </>
);
