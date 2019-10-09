import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Menu, Footer } from '.';
import { SEO } from '../web';

// Global application wrapper
export const Layout: React.FC<{}> = ({ children }) => (
	<StaticQuery
		query={query}
		render={data => (
			<>
				<SEO />
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
