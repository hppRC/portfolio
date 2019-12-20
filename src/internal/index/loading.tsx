import React from 'react';

import styled from '@emotion/styled';

//import { animated, useSpring } from 'react-spring';

const Loading: React.FCX = ({ className }) => {
  //const props = useSpring({ number: 1, from: { number: 0 } });
  return <div className={className}>Now Loading...</div>;
};

export const StyledLoading = styled(Loading)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  width: 100%;
  height: 100vh;
`;

export default StyledLoading;
