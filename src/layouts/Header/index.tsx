import React from 'react';
import styled from '@emotion/styled';
import Menu from './menu';

const Header: React.FCX = ({ className }) => (
  <header className={className}>
    <Menu />
  </header>
);

export const StyledHeader = styled(Header)``;

export default StyledHeader;
