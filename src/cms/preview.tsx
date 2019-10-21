import React from 'react';
import MDX from '@mdx-js/runtime';
import * as MdxComponents from '../mdx/components';
import * as MdxScope from '../mdx/scope';

interface Props {
	entry: any;
}

export const Preview: React.FC<Props> = ({ entry }) => {
	/* you should remove escape sequence(ex. if input is "# Hello", entry.getIn(['data']).toJS().body is "\# Hello")*/
	const mdx = entry
		.getIn(['data'])
		.toJS()
		.body.replace('\\#', '#');
	return (
		<MDX components={{ ...MdxComponents }} scope={{ ...MdxScope }}>
			{mdx}
		</MDX>
	);
};

export default Preview;
