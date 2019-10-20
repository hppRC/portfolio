import React from 'react';
import { FileSystemBackend } from 'netlify-cms-backend-fs';
import CMS from 'netlify-cms';

const isClient = typeof window !== 'undefined';
const isDevelopment = process.env.NODE_ENV === 'development';

if (isClient) {
	window.CMS_MANUAL_INIT = true;
}

if (isDevelopment) {
	// Allows for local development overrides in cms.yaml
	window.CMS_ENV = 'localhost_development';

	// Attach to the file system
	CMS.registerBackend('file-system', FileSystemBackend);
}

CMS.registerPreviewTemplate('posts', Preview);

CMS.init();
