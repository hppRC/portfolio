import React from 'react';

import { CallToAction, SmartLink } from '../components';

// Include all components that will be parsed by MDX as React components here.
// Any React component you'd like to allow your editors to use should be placed here.
export const CMS_SCOPE = {
	CallToAction: props => <CallToAction {...props} />
};

// Include any tags you'd like to replace with React components
export const CMS_COMPONENTS = {
	a: props => <SmartLink {...props} />
};
