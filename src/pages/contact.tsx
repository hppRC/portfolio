import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const Contact: React.FCX = ({ className }) => (
  <div className={className}>
    <h1>Contact</h1>
  </div>
);

const StyledContact = styled(Contact)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Contact' pathname='/Contact' />
    <StyledContact />
  </>
);
