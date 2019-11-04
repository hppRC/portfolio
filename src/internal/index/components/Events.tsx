import React from 'react';
import EventsMDX from '../documents/events.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';

const Theme = styled(BaseTheme)``;

export const Events = () => (
	<Theme>
		<EventsMDX />
	</Theme>
);

export default Events;
