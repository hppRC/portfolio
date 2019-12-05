import React from 'react';
import { CounterContainer } from './src/store/ConterContainer';
import Layout from './src/layouts';

const wrapWithProvider = ({ element }) => {
  console.log(element);
  return (
    <CounterContainer.Provider>
      <Layout>{element}</Layout>
    </CounterContainer.Provider>
  );
};

export const wrapRootElement = wrapWithProvider;
