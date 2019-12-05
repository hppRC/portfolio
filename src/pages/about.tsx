import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import AboutMDX from '../mdx/about.mdx';

const About: React.FCX = ({ className }) => (
  <div className={className}>
    <AboutMDX />
  </div>
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
