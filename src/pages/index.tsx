import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const Index: React.FCX = ({ className }) => (
  <div className={className}>
    <h1>Gatsby Starter hpp</h1>
  </div>
);

const StyledIndex = styled(Index)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Top' pathname='/' />
    <StyledIndex />
  </>
);
