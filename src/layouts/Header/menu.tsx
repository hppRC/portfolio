import React from 'react';
import { StyledSideMenu as SideMenu } from './side-menu';
//import MenuIcon from './MenuIcon';
import styled from '@emotion/styled';
import { MenuContainer } from '../../store';

const Menu: React.FCX = ({ className }) => {
  const menuContainer = MenuContainer.useContainer();
  const { toggle } = menuContainer;
  return (
    <aside className={className}>
      <button onClick={toggle}>toggle</button>
      <SideMenu />
    </aside>
  );
};

export const StyledMenu = styled(Menu)``;

export default StyledMenu;
