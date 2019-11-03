import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import MenuIcon from './MenuIcon';

interface MenuInterface {
	open: boolean;
	toggle(open: boolean): void;
	width?: number;
	opacity?: number;
}

const SideMenuTheme = styled.div`
	display: flex;
	flex-direction: row-reverse;
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	padding: 2rem;
	background-color: #ffffffa0;
`;

export const SideMenu: React.FC<MenuInterface> = ({
	open,
	toggle,
	width,
	opacity
}) => {
	return (
		<SideMenuTheme onClick={() => toggle(!open)}>
			<MenuIcon open={open} toggle={toggle} />
			<animated.div style={{ width: width, opacity: opacity }}>
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
			</animated.div>
		</SideMenuTheme>
	);
};

export default SideMenu;
