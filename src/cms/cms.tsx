//import CMS from 'netlify-cms-app';
import loadable from '@loadable/component';

const Preview = loadable(() => import('./preview'));

import('netlify-cms-app').then((CMS: any) => {
	CMS.registerPreviewTemplate('posts', Preview);
	CMS.init();
});
