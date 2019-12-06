import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import {
  Background,
  TopMessage,
  Intro,
  About,
  Skills,
  Works,
  Events
} from '../internal/index';

const Index: React.FCX = ({ className }) => (
  <main className={className}>
    <TopMessage />
    <Intro />
    <About />
    <Skills />
    <Works />
    <Events />
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
