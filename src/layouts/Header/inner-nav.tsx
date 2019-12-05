import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { animated } from 'react-spring';

const InnerNav = () => (
  <ul>
    <animated.li>
      <Link to='/'>top</Link>
    </animated.li>
    <animated.li>
      <Link to='/about'>about</Link>
    </animated.li>
    <animated.li>
      <Link to='/skills'>skills</Link>
    </animated.li>
    <animated.li>
      <Link to='/works'>works</Link>
    </animated.li>
    <animated.li>
      <Link to='/posts'>posts</Link>
    </animated.li>
    <animated.li>
      <Link to='/contact'>contact</Link>
    </animated.li>
  </ul>
);

export const StyledInnerNav = styled(InnerNav)``;

export default StyledInnerNav;
