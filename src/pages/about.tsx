import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';

export const About: React.FC<Props> = ({ data }) => (
	<Layout>
		<h1>{data.site.siteMetadata.title} About</h1>
		<p>This is the about page.</p>
	</Layout>
);

interface Props {
	data: {
		site: {
			siteMetadata: {
				title: string;
			};
		};
	};
}

export const query = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default About;
