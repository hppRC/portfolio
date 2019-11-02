import React from 'react';
import { SEO } from '../components';
import Header from './Header';
import Footer from './Footer';
import ResetCSS from './ResetCSS';
import styled from '@emotion/styled';

//Guarantees that the page height is at least 100vh
const DedaultTheme = styled.div`
	color: #fff;
	min-height: 100vh;
	height: auto;
`;

export const Layout: React.FC = ({ children }) => (
	<>
		<ResetCSS />
		<SEO />
		<DedaultTheme>
			<Header />
			{children}
			<Footer />
		</DedaultTheme>
	</>
);

export default Layout;
