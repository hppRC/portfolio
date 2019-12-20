import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import { useDelay } from '../hooks';
import { About, Background, Events, Intro, Skills, TopMessage, Works } from '../internal/index';
import baseStyle from '../styles/base-style';

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
