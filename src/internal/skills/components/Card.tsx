import React from 'react';
import styled from '@emotion/styled';

export const Card = styled.div`
	div {
		position: relative;
		top: 0;
		left: -1.5rem;
		display: flex;
		align-items: center;
		pointer-events: none;
		svg {
			width: 5rem;
			height: 5rem;
		}
		h1 {
			position: relative;
			top: 0;
			left: 0.75rem;
		}
	}
`;
export default Card;
