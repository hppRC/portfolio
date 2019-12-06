import React from 'react';
import styled from '@emotion/styled';
import { animated } from 'react-spring';

const OuterNav = () => (
  <ul>
    <animated.li>
      <a href='https://blog.hpprc.com'>blog</a>
    </animated.li>
    <animated.li>
      <a href='https://github.com/hppRC'>github</a>
    </animated.li>
    <animated.li>
      <a href={`https://twitter.com/osaremochi`}>twitter</a>
    </animated.li>
    <animated.li>
      <a href={`https://qiita.com/hppRC`}>Qiita</a>
    </animated.li>
  </ul>
);

export const StyledOuterNav = styled(OuterNav)``;

export default StyledOuterNav;
