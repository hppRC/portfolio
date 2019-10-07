import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { safelyGetSiteConfig } from '../cms';

export const query = graphql`
	query {
		sitePage(path: { eq: "/config/" }) {
			context {
				frontmatter {
					menu_nav {
						text
						url
					}
				}
			}
		}
	}
`;

interface Item {
	url: string;
	text: string;
}

export const Menu = () => (
	<StaticQuery
		query={query}
		render={data => {
			const menu = safelyGetSiteConfig(data.sitePage).menu_nav || [];
			return (
				<ul>
					{menu.map((item: Item, i: number) => (
						<li key={i}>
							<Link to={item.url}>{item.text}</Link>
						</li>
					))}
				</ul>
			);
		}}
	/>
);
