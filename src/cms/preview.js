import React from 'react';
import MDX from '@mdx-js/runtime';
import * as MdxComponents from '../mdxComponents';

// Provide custom components for markdown elements
const components = {
	h1: props => <h1 style={{ color: 'tomato' }} {...props} />
};

// Provide custom components that will be referenced as JSX
// in the markdown string
const scope = {
	Demo: () => <h1>This is a demo component</h1>,
	...MdxComponents
};

export const Preview = ({ entry }) => {
	/* to remove escape sequence(ex. if input is "# Hello", entry.getIn(['data']).toJS().body is "\# Hello")*/
	const mdx = entry
		.getIn(['data'])
		.toJS()
		.body.replace('\\#', '#');
	return (
		<MDX components={components} scope={scope}>
			{mdx}
		</MDX>
	);
};

export default Preview;
