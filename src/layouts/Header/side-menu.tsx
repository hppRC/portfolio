import React from 'react';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import { StyledInnerNav as InnerNav } from './inner-nav';
import { StyledOuterNav as OuterNav } from './outer-nav';
import { MenuContainer } from '../../store';

const SideMenu: React.FCX = ({ className }) => {
  const menuContainer = MenuContainer.useContainer();
  const { open } = menuContainer;
  const props = useSpring({
    config: { mass: 2, friction: 30 },
    from: {
      o: 0,
      opacity: 0
    },
    o: 1,
    opacity: open ? 1 : 0,
    width: open ? 200 : 0
  });
  return (
    <animated.nav className={className} style={{ ...props }}>
      <InnerNav />
      <OuterNav />
    </animated.nav>
  );
};

export const StyledSideMenu = styled(SideMenu)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;

  border: solid 1px #fff;
  background-color: #09090fb5;
`;

export default StyledSideMenu;
