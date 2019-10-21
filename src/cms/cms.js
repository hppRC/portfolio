import React from 'react';
import CMS from 'netlify-cms-app';
import { MdxControl, setupPreview } from 'netlify-cms-widget-mdx';
import * as mdxComponents from '../mdxComponents';
import { FileSystemBackend } from 'netlify-cms-backend-fs';

const isClient = typeof window !== 'undefined';
const isDevelopment = process.env.NODE_ENV === 'development';

if (isClient) {
	window.CMS_MANUAL_INIT = true;
}

if (isDevelopment) {
	window.CMS_ENV = 'localhost_development';
	CMS.registerBackend('file-system', FileSystemBackend);
}

const components = {
	h1: ({ children, ...props }) => (
		<h1 style={{ color: 'tomato' }} {...props}>
			{children}
		</h1>
	)
};

//scope

const scope = {
	LayoutTest: props => (
		<div
			style={{
				padding: '10px',
				border: '1px solid green',
				borderRadius: '5px'
			}}
			{...props}
		/>
	),
	Test: () => <h1>Testなのだ</h1>,
	...mdxComponents
};

console.log(scope);

const allowedImports = {};

CMS.registerWidget(
	'mdx',
	MdxControl,
	setupPreview({
		components: components,
		scope: scope,
		allowedImports: allowedImports,
		mdPlugins: []
	})
);

CMS.init();
