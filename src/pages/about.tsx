import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import { StyledIntroduction as Introduction } from '../internal/about';
import baseStyle from '../styles/base-style';

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
