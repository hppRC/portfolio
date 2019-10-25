import React from 'react';
import SEO from '../components/SEO';
import Header from './Header';
import Footer from './Footer';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => (
	<>
		<SEO />
		<Header />
		{children}
		<Footer />
	</>
);

export default Layout;
