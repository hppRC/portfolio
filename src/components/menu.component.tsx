import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { safelyGetSiteConfig } from '../cms';
import { SmartLink } from './smart-link.component';

interface Item {
	url: string;
	text: string;
}

export const Menu: React.FC<{}> = () => (
	<StaticQuery
		query={query}
		render={data => {
			const menu = safelyGetSiteConfig(data.sitePage).menu_nav || [];
			return (
				<ul>
					{menu.map((item: Item, i: number) => (
						<li key={i}>
							<SmartLink to={item.url}>{item.text}</SmartLink>
						</li>
					))}
				</ul>
			);
		}}
	/>
);

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
