import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import { StyledWorkCards as WorkCards } from '../internal/works/work-cards';
import baseStyle from '../styles/base-style';

const Works: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Works</h1>
    <WorkCards />
  </main>
);

const StyledWorks = styled(Works)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Works' pathname='/works' />
    <StyledWorks />
  </>
);
