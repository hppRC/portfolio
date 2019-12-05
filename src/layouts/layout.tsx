import React from 'react';
import { ResetCSS, GlobalCSS } from '../components';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => (
  <>
    <ResetCSS />
    <GlobalCSS />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
