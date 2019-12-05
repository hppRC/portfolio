import React, { useState } from 'react';
//import SideMenu from './SideMenu';
//import MenuIcon from './MenuIcon';
//import styled from '@emotion/styled';

export const Menu = () => {
  const [open, toggle] = useState(false);
  console.log(toggle);
  return <div>{open || 'yeah'}</div>;
};

export default Menu;
