import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import MenuIcon from './MenuIcon';
import UseAnimations from 'react-useanimations';
import { isMobile } from 'react-device-detect';

interface MenuInterface {
	open: boolean;
	toggle(open: boolean): void;
	width?: number;
	opacity?: number;
}

const SideMenuTheme = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	padding: 2rem;
	border: solid 1px #fff;
	background-color: #090909b5;
`;

const ThemedUl = styled.ul`
	display: flex;
	flex-direction: column;
	li {
		a {
			font-size: 2rem;
		}
	}
`;

const ThemedIconsUl = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 2rem 0;
	li {
		a {
			font-size: 2rem;
		}
	}
`;

export const SideMenu: React.FC<MenuInterface> = ({
	open,
	toggle,
	width,
	opacity
}) => {
	const props = useSpring({
		config: { mass: 100, friction: 100 },
		from: { opacity: 0 },
		to: { opacity: 1 }
	});
	return (
		<SideMenuTheme>
			<div
				style={{
					width: width,
					display: 'flex',
					justifyContent: 'flex-end'
				}}
			>
				<MenuIcon open={open} toggle={toggle} />
			</div>

			<animated.div style={{ width: width, opacity: opacity }}>
				<ThemedUl>
					<animated.li style={props}>
						<Link to='/about'>about</Link>
					</animated.li>
					<animated.li style={props}>
						<Link to='/posts'>posts</Link>
					</animated.li>
					<animated.li style={props}>
						<Link to='/contact'>contact</Link>
					</animated.li>
				</ThemedUl>
				<ThemedIconsUl>
					<animated.li style={props}>
						<a href='https://github.com/hppRC'>
							<UseAnimations animationKey='github' size={40} />
						</a>
					</animated.li>
					<animated.li style={props}>
						<a
							href={`https://${
								isMobile ? 'mobile.' : ''
							}twitter.com/osaremochi`}
						>
							<UseAnimations animationKey='twitter' size={50} />
						</a>
					</animated.li>
				</ThemedIconsUl>
			</animated.div>
		</SideMenuTheme>
	);
};

export default SideMenu;
