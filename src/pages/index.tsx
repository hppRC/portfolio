import React from 'react';
import { graphql, Link } from 'gatsby';
import { SEO } from '../components';
import { IndexPage } from '../internal/index';
import { IndexPageQuery } from '../../types/graphql-types.d';

export const Index = ({ data }: { data: IndexPageQuery }) => {
	const fluid: any = data?.file?.childImageSharp?.fluid;
	return (
		<>
			<SEO
				title={'hppPortfolio'}
				desc={'hpp portfolio site.'}
				banner={fluid?.src}
				pathname={`/`}
			/>
			<IndexPage />
		</>
	);
};

export const query = graphql`
	query IndexPage {
		file(relativePath: { eq: "../images/icon.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 90) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;

export default Index;
