import React from 'react';
import MDX from '@mdx-js/runtime';
import * as MdxComponents from '../mdx/components';
import * as MdxScope from '../mdx/scope';

//typescript defeat me (I didn't want to use 'any')
export const Preview: React.FC<{ entry: any }> = ({ entry }) => (
	<MDX components={{ ...MdxComponents }} scope={{ ...MdxScope }}>
		{entry.toJS().data.body}
	</MDX>
);

export default Preview;
