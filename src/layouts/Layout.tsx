import React from 'react';
import { SEO } from '../components';
import { Header } from './Header';
import Footer from './Footer';
import ResetCSS from './ResetCSS';
import GlobalCSS from './GlobalCSS';

export const Layout: React.FC = ({ children }) => (
	<>
		<ResetCSS />
		<GlobalCSS />
		<SEO />
		<Header />
		{children}
		<Footer />
	</>
);

export default Layout;
