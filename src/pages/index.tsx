import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { StyledBackground as Background } from '../internal/index/background';

const Index: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Gatsby Starter hpp</h1>
  </main>
);

const StyledIndex = styled(Index)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Top' pathname='/' />
    <Background />
    <StyledIndex />
  </>
);
