import React from 'react';
import CMS from 'netlify-cms-app';
import * as mdxComponents from '../mdxComponents';
import Preview from './preview';

CMS.registerPreviewTemplate('posts', Preview);

CMS.init();
