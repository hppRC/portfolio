import React from 'react';
import { SEO } from '../components';
import Header from './Header';
import Footer from './Footer';
import ResetCSS from './ResetCSS';
import styled from '@emotion/styled';

const Theme = styled.div`
	background-color: #000;
`;

export const Layout: React.FC<{}> = ({ children }) => (
	<>
		<ResetCSS />
		<SEO />
		<Theme>
			<Header />
			{children}
			<Footer />
		</Theme>
	</>
);

export default Layout;
