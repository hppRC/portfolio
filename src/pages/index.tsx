import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { Background, TopMessage } from '../internal/index';

const Index: React.FCX = ({ className }) => (
  <main className={className}>
    <TopMessage />
    <h1>Gatsby Starter hpp</h1>
  </main>
);

const StyledIndex = styled(Index)`
  ${baseStyle};
  padding-top: 0;
`;

export default () => (
  <>
    <SEO title='Top' pathname='/' />
    <Background />
    <StyledIndex />
  </>
);
