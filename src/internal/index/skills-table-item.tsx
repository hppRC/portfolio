import React from 'react';
import { animated } from 'react-spring';

import styled from '@emotion/styled';

const Item = ({ className, icon, name, style }: any) => (
  <animated.div style={style} className={className}>
    <i>{icon}</i>
    <h3>{name}</h3>
  </animated.div>
);

export const StyledItem = styled(Item)`
  display: flex;
  align-items: center;

  border: solid 1px #fff;
  border-radius: 5px;
  fill: #fff;
  color: #fff;

  font-size: 2rem;

  i svg {
    width: 8rem;
    height: 8rem;
  }
  will-change: transform, opacity, width, height;
`;

export default StyledItem;
