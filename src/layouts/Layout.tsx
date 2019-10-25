import React from 'react';
import SEO from '../components/SEO';
import Header from './Header';
import Footer from './Footer';

export const Layout: React.FC<{}> = ({ children }) => (
	<>
		<SEO />
		<Header />
		{children}
		<Footer />
	</>
);

export default Layout;
