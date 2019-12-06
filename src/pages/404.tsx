import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const NotFound: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Not Found</h1>
  </main>
);

const StyledNotFound = styled(NotFound)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='404 NotFound' />
    <StyledNotFound />
  </>
);
