import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledButton = styled.div`
	width: 12rem;
	height: auto;
	border: solid 1px #fff;
	border-radius: 5px;
	text-align: center;
	transition: all 0.3s ease 0s;

	a {
		display: block;
		padding: 1rem 1rem;
		color: #fff;
		text-align: center;
		text-decoration: none;
		font-weight: bold;
	}

	:hover {
		opacity: 0.6;
	}
`;

export const LearnMoreButton: React.FC<{ to: string }> = ({ to }) => (
	<StyledButton>
		<Link to={to}>Learn more</Link>
	</StyledButton>
);

export default LearnMoreButton;
