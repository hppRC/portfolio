import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { StyledIntroduction as Introduction } from '../internal/about';

const About: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>About</h1>
    <Introduction />
  </main>
);

const StyledAbout = styled(About)`
  ${baseStyle};
  h1 {
    padding-bottom: 0;
  }
`;

export default () => (
  <>
    <SEO title='About' pathname='/about' />
    <StyledAbout />
  </>
);
