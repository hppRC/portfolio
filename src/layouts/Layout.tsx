import React from 'react';
import { SEO } from '../components';
import Header from './Header';
import Footer from './Footer';
import Reset from './Reset';

export const Layout: React.FC<{}> = ({ children }) => (
	<>
		<Reset />
		<SEO />
		<Header />
		{children}
		<Footer />
	</>
);

export default Layout;
