import React from 'react';

import HomePage from './home-page';
import DefaultPage from './default-page';
import NotFoundPage from './not-found';
import { Layout } from '../components/layouts';
import { safelyGetFrontMatter } from '../cms';

// Extend this template map to allow your users to choose a page layout from the CMS
// If you're only looking for how to specify a different template per content folder, see:
// https://www.gatsbyjs.org/packages/gatsby-mdx/#installation

interface Props {
	pageContext: { frontmatter?: any };
}

type TemplateType = ({ pageContext }: Props) => JSX.Element;

interface MapInterface {
	[key: string]: TemplateType;
}

const componentTemplateMap: MapInterface = {
	'home-page': HomePage,
	'hidden-page': NotFoundPage
};

const CMSTemplate = (props: Props) => {
	const { pageContext } = props;
	const { templateKey } = safelyGetFrontMatter(pageContext);
	const Page = componentTemplateMap[templateKey];
	return (
		<Layout>
			{Page ? <Page {...props} /> : <DefaultPage {...props} />}
		</Layout>
	);
};

export default CMSTemplate;
