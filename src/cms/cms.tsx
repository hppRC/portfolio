import CMS from 'netlify-cms-app';
import loadable from '@loadable/component';

const Preview = loadable(() => import('./preview'));

CMS.registerPreviewTemplate('posts', Preview);

CMS.init();
