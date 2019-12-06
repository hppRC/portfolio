import React from 'react';
import { StyledSideMenu as SideMenu } from './side-menu';
import { StyledMenuButton as MenuButton } from './menu-button';
import styled from '@emotion/styled';

const Menu: React.FCX = ({ className }) => (
  <aside className={className}>
    <SideMenu />
    <MenuButton />
  </aside>
);

export const StyledMenu = styled(Menu)`
  width: 100vw;
`;

export default StyledMenu;
