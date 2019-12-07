import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { StyledWorkCards as WorkCards } from '../internal/works/work-cards';

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
