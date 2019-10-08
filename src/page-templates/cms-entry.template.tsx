import React from 'react';

import HomePage from './home-page.template';
import DefaultPage from './default-page.template';
import NotFoundPage from './not-found.template';
import { AppLayout } from '../app-layout.component';
import { safelyGetFrontMatter } from '../cms';

// Extend this template map to allow your users to choose a page layout from the CMS
// If you're only looking for how to specify a different template per content folder, see:
// https://www.gatsbyjs.org/packages/gatsby-mdx/#installation

interface Props {
	pageContext: { frontmatter?: any };
}

interface MapInterface {
	[key: string]: ({ pageContext }: Props) => JSX.Element;
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
		<AppLayout>
			{Page ? <Page {...props} /> : <DefaultPage {...props} />}
		</AppLayout>
	);
};

export default CMSTemplate;