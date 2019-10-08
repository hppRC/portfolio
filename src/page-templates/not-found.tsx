import React from 'react';

import { SEO } from '../components/web';

interface Props {
	pageContext?: { frontmatter?: any };
}

type TemplateType = ({ pageContext }: Props) => JSX.Element;

export const NotFoundTemplate: TemplateType = () => (
	<>
		<SEO title='404: Not found' />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</>
);

export default NotFoundTemplate;
