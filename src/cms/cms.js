import CMS from 'netlify-cms-app';
import Preview from './preview';

CMS.registerPreviewTemplate('posts', Preview);

CMS.init();
