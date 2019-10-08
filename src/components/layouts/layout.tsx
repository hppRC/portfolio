import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

import { Header, Menu, Footer } from '.';

// Global application wrapper
export const Layout: React.FC<{}> = ({ children }) => (
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
					<Global
						styles={css`
							${emotionReset}
						`}
					/>
					<Header siteTitle={data.site.siteMetadata.title} />
					<Menu />
					<main>{children}</main>
					<Footer siteTitle={data.site.siteMetadata.title} />
				</>
			);
		}}
	/>
);

export default Layout;
