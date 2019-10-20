import React from 'react';
import MDX from '@mdx-js/runtime';
import { SlidePicker } from 'react-color';

export const Preview = ({ entry }) => {
	console.log(entry.getIn(['data']).toJS().body);
	const mdx = entry.getIn(['data']).toJS().body;
	return (
		<>
			<MDX
				components={{
					SlidePicker: () => <SlidePicker />
				}}
				scope={{
					Test: () => <h1>Test Component</h1>
				}}
			>
				{mdx}
			</MDX>
			<SlidePicker />
		</>
	);
};

export default Preview;
