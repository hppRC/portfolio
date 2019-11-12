import React from 'react';
import styled from '@emotion/styled';

export const Card = styled.div`
	div {
		position: relative;
		top: 0;
		left: -1rem;
		display: flex;
		align-items: center;
		pointer-events: none;
	}
	svg {
		width: 5rem;
		height: 5rem;
	}
`;
export default Card;
