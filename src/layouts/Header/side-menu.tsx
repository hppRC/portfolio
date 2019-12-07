import React from 'react';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import { StyledInnerNav as InnerNav } from './inner-nav';
import { StyledOuterNav as OuterNav } from './outer-nav';
import { MenuContainer } from '../../store';

const SideMenu: React.FCX = ({ className }) => {
  const { open } = MenuContainer.useContainer();
  const settings = useSpring({
    config: { mass: 0.7, friction: 20, tension: 100 },
    from: { opacity: 0, transform: 'translate3d(200px, 0, 0)' },
    to: {
      opacity: open ? 1 : 0,
      transform: open ? 'translate3d(0px, 0, 0)' : 'translate3d(200px, 0, 0)'
    }
  });
  return (
    <animated.nav className={className} style={{ ...settings }}>
      <InnerNav />
      <OuterNav />
    </animated.nav>
  );
};

export const StyledSideMenu = styled(SideMenu)`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 200px;

  padding: 4rem 2rem;

  border: solid 1px #fff;
  background-color: #09090fb5;

  will-change: transform;

  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
  }
  @media screen and (max-width: 480px) {
  }
`;

export default StyledSideMenu;
