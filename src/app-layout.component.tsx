import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Menu, Footer } from './components';

interface Props {
	children?: any;
	pageContext?: any;
}

// Global application wrapper
export const AppLayout = ({ children, pageContext }: Props) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => {
			return (
				<>
					<Header siteTitle={data.site.siteMetadata.title} />
					<Menu />
					<div>
						<main>{children}</main>
					</div>
					<Footer siteTitle={data.site.siteMetadata.title} />
				</>
			);
		}}
	/>
);

export default AppLayout;
