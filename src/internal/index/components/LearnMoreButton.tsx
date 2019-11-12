import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledButton = styled.div`
	width: 5rem;
	height: 2rem;
	padding: 1rem 3rem;
	border: solid 1px #fff;

	a {
		display: block;
		color: #fff;
		text-decoration: none;
	}
`;

export const LearnMoreButton: React.FC<{ to: string }> = ({ to }) => (
	<StyledButton>
		<Link to={to}>Learn more</Link>
	</StyledButton>
);

export default LearnMoreButton;
