import React from 'react';
import { StyledSideMenu as SideMenu } from './side-menu';
import { StyledMenuButton as MenuButton } from './menu-button';
import styled from '@emotion/styled';

const Menu: React.FCX = ({ className }) => (
  <aside className={className}>
    <MenuButton />
    <SideMenu />
  </aside>
);

export const StyledMenu = styled(Menu)``;

export default StyledMenu;
