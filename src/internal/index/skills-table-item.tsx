import React from 'react';
import styled from '@emotion/styled';
import { animated } from 'react-spring';

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

  i svg {
    width: 5rem;
    height: 5rem;
  }
  will-change: transform, opacity, width, height;
`;

export default StyledItem;
