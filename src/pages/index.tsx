import React from 'react';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';
import { useDelay } from '../hooks';
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
`;

export default () => {
  const waiting = useDelay(1000);
  return (
    <>
      <SEO title='Top' pathname='/' />
      {!waiting && <Background />}
      <StyledIndex />
    </>
  );
};
