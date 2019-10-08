import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Menu, Footer } from '.';
import { Reset } from '../styles';

// Global application wrapper
export const Layout: React.FC<{}> = ({ children }) => (
	<StaticQuery
		query={query}
		render={data => (
			<>
				<Reset />
				<Header siteTitle={data.site.siteMetadata.title} />
				<Menu />
				<main>{children}</main>
				<Footer siteTitle={data.site.siteMetadata.title} />
			</>
		)}
	/>
);

const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default Layout;
