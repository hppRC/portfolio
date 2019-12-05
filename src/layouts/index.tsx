import React from 'react';
import { ResetCSS, GlobalCSS } from '../components';
import StyledHeader from './Header';
import StyledFooter from './Footer';

export const Layout: React.FC = ({ children }) => (
  <>
    <ResetCSS />
    <GlobalCSS />
    <StyledHeader />
    <main>{children}</main>
    <StyledFooter />
  </>
);

export default Layout;
