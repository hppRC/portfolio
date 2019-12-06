import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const Contact: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
  </main>
);

const StyledContact = styled(Contact)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Contact' pathname='/contact' />
    <StyledContact />
  </>
);
