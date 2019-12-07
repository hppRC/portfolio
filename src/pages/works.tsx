import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { StyledWorkCards as WorkCards } from '../internal/works/work-cards';

const Works: React.FCX = ({ className }) => (
  <main className={className}>
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
