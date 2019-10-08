import React from 'react';
import MDX from '@mdx-js/runtime';

import { CatchError } from './catch-error.component';

/* Use this component to parse markdown using MDX. See MDX runtime for details.
 *
 * @md: string - Markdown to be parsed
 *
 * @scope: Object - Object wherein keys should be React component names that
 * should be parsed with MDX and values should be a function that accepts
 * props and returns the desired component.
 * e.g. { Title: props => <Title ...props />
 *
 * @components: Object - Object wherein keys should be supported HTML tags and
 * values should be a function returning the React component which should render
 * them.
 * eg. { h1: props => <Title ...props />
 */

interface Props {
	md: string;
	scope?: object;
	components?: object;
}

export const RenderMarkdown: React.FC<Props> = ({
	md = '',
	scope = {},
	components = {}
}) => (
	<CatchError>
		<MDX scope={scope} components={components}>
			{md}
		</MDX>
	</CatchError>
);
