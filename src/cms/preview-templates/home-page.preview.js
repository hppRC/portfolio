import React from 'react';
import { HomePageTemplate } from '../../page-templates';
import { CatchError } from '../../core';

export const HomePagePreview = ({ entry }) => (
	<CatchError>
		<HomePageTemplate {...entry.getIn(['data']).toJS()} isPreview={true} />
	</CatchError>
);
