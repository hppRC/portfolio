import React from 'react';

import styled from '@emotion/styled';

import { StyledMenuButton as MenuButton } from './menu-button';
import { StyledSideMenu as SideMenu } from './side-menu';

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
