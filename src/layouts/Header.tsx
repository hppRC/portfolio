import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Theme = styled.div`
	display: flex;
	justify-content: flex-end;
	position: fixed;
	top: 0px;
	left: 0px;
	display: flex;
	align-items: center;
	width: 100vw;
	color: #fff;

	ul {
		display: flex;
		justify-content: space-around;
		align-items: stretch;

		li {
			display: inline-block;
			padding: 1rem;
		}
	}

	ul li a {
		text-decoration: none;
		color: #fff;
	}
`;

export const Header = () => (
	<Theme>
		<ul>
			<li>
				<Link to='/about'>about</Link>
			</li>
			<li>
				<Link to='/posts'>posts</Link>
			</li>
			<li>
				<Link to='/contact'>contact</Link>
			</li>
		</ul>
	</Theme>
);

export default Header;
