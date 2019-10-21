import React from 'react';
import MDX from '@mdx-js/runtime';
import * as MdxComponents from '../mdx/components';
import * as MdxScope from '../mdx/scope';

//typescript defeat me (I didn't want to use 'any')
export const Preview: React.FC<any> = ({ entry }) => {
	/*
	to rendering mdx(JSX and normal markdown), you have to remove escape sequence
	because 'entry.getIn(['data']).toJS().body is "\# Hello"' if input is "# Hello"
	*/
	const mdx = entry.toJS().data.body.replace('\\#', '#');

	return (
		<MDX components={{ ...MdxComponents }} scope={{ ...MdxScope }}>
			{mdx}
		</MDX>
	);
};

export default Preview;
