import React from 'react';
import MDX from '@mdx-js/runtime';
import * as ReactColor from 'react-color';
import * as MdxComponents from '../mdxComponents';

// Provide custom components for markdown elements
const components = {
	h1: props => <h1 style={{ color: 'tomato' }} {...props} />
};

// Provide custom components that will be referenced as JSX
// in the markdown string
const scope = {
	Demo: props => <h1>This is a demo component</h1>,
	Test: () => <h1>Test Test Test</h1>,
	...MdxComponents
};

export const Preview = ({ entry }) => {
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
