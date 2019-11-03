import React from 'react';
import styled from '@emotion/styled';
import Menu from './Menu';

const ThemedHeader = styled.header`
	display: flex;
	justify-content: flex-end;
	position: fixed;
	top: 0px;
	left: 0px;
	display: flex;
	align-items: center;
	width: 100vw;
	color: #fff;
	padding: 2rem;

	ul {
		li {
			display: inline-block;

			a {
				text-decoration: none;
				color: #fff;
			}
		}
	}
`;

export const Header = () => (
	<ThemedHeader>
		<Menu />
	</ThemedHeader>
);

export default Header;
