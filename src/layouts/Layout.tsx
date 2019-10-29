import React from 'react';
import { SEO } from '../components';
import Header from './Header';
import Footer from './Footer';
import ResetCSS from './ResetCSS';

export const Layout: React.FC<{}> = ({ children }) => (
	<>
		<ResetCSS />
		<SEO />
		<Header />
		{children}
		<Footer />
	</>
);

export default Layout;
