import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import SEO from '../components/SEO';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => (
	<StaticQuery
		query={query}
		render={data => (
			<>
				<SEO />
				<Link to='/'>
					<h3>{data.site.siteMetadata.title} Layout</h3>
				</Link>
				<Link to='/about'>About</Link>
				{children}
			</>
		)}
	/>
);

const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default Layout;
