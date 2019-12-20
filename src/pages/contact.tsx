import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import { StyledForm as Form } from '../internal/contact/form';
import baseStyle from '../styles/base-style';

const Contact: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <Form />
  </main>
);

const StyledContact = styled(Contact)`
  ${baseStyle};
  padding-top: 5rem;
`;

export default () => (
  <>
    <SEO title='Contact' pathname='/contact' />
    <StyledContact />
  </>
);
