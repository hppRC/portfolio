import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Menu } from './components';

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
						<footer>
							© {new Date().getFullYear()}, Built with
							{` `}
							<a href='https://www.gatsbyjs.org'>Gatsby</a>
						</footer>
					</div>
				</>
			);
		}}
	/>
);

export default AppLayout;
