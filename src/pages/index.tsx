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
  //  Loading
} from '../internal/index';

const Index: React.FCX = ({ className }) => {
  //const waiting = useDelay(1000);
  return (
    <main className={className}>
      <TopMessage />
      <Intro />
      <About />
      <Skills />
      <Works />
      <Events />
    </main>
  );
};

const StyledIndex = styled(Index)`
  ${baseStyle};
  padding-top: 0;
`;

export default () => {
  const waiting = useDelay(2000);
  return (
    <>
      <SEO title='Top' pathname='/' />
      {!waiting && <Background />}
      <StyledIndex />
    </>
  );
};
