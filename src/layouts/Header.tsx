import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Menu from './Menu';

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

			a {
				text-decoration: none;
				color: #fff;
			}
		}
	}
`;

export const Header = () => (
	<Theme>
		<Menu />
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

const ButtonTheme = styled.div`
	color: #fff;
	background-color: #734992;
`;

const Button = () => {
	const [open, toggle]: [boolean, any] = useState(false);
	const props: any = useSpring({ width: open ? 100 : 0 });

	return (
		<div onClick={() => toggle(!open)}>
			<animated.div style={props} />
			<ButtonTheme>
				<animated.div>
					{props.width.interpolate((x: number) => x.toFixed(0))}
				</animated.div>
			</ButtonTheme>
		</div>
	);
};

export default Header;
