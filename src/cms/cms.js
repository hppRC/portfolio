import React from 'react';
//import { FileSystemBackend } from 'netlify-cms-backend-fs';
import CMS from 'netlify-cms-app';
import Preview from './Preview';
import { MdxControl, setupPreview } from 'netlify-cms-widget-mdx';
import * as ReactColor from 'react-color';

// if (process.env.NODE_ENV === 'development') {
// 	window.CMS_ENV = 'development_overrides'; // Set the CMS_ENV to the development_ overrides.
// 	CMS.registerBackend('file-system', FileSystemBackend); // Register the FileSystemBackend.
// }

CMS.registerWidget(
	'mdx',
	MdxControl,
	setupPreview({
		components: {
			h1: ({ children, ...props }) => (
				<h1 style={{ color: 'tomato' }} {...props}>
					{children}
				</h1>
			)
		},
		scope: {
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
			Test: () => <h1>Testなのだ</h1>
		},
		allowedImports: {
			'react-color': {
				ImportDefault: ''
			}
		},
		mdPlugins: []
	})
);

CMS.init();
