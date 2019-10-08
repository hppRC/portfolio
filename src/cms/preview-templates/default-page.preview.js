import React from 'react';
import { DefaultPageTemplate } from '../../page-templates';
import { CatchError } from '../../core';

export const DefaultPagePreview = ({ entry }) => (
	<CatchError>
		<DefaultPageTemplate
			{...entry.getIn(['data']).toJS()}
			isPreview={true}
		/>
	</CatchError>
);
