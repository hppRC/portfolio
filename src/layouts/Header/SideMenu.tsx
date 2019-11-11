import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import UseAnimations from 'react-useanimations';
import { animated, useSpring } from 'react-spring';
import { isMobile } from 'react-device-detect';

interface MenuInterface {
	open: boolean;
	toggle(open: boolean): void;
}

const SideMenuTheme = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	z-index: 100;
	> div {
		border: solid 1px #fff;
		background-color: #09090fb5;
		height: 100vh;
	}
`;

const ThemedUl = styled.ul`
	display: flex;
	flex-direction: column;
	z-index: 101;
	li {
		display: inline-block;
		a {
			font-size: 2rem;
			text-decoration: none;
			color: #fff;
			transition: opacity 0.3s;
			:hover {
				opacity: 0.6;
			}
		}
	}
`;

const ThemedIconsUl = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 2rem 0;
	li {
		display: inline-block;
		a {
			font-size: 2rem;
			text-decoration: none;
			color: #fff;
			z-index: 102;
			div {
				transition: opacity 0.3s;
				:hover {
					opacity: 0.6;
				}
			}
		}
	}
`;

export const SideMenu: React.FC<MenuInterface> = ({ open, toggle }) => {
	const props = useSpring({
		config: { mass: 2, friction: 30 },
		from: {
			o: 0,
			opacity: 0
		},
		o: 1,
		opacity: open ? 1 : 0,
		width: open ? 200 : 0
	});
	const opacityStyle = {
		opacity: props.opacity.interpolate({
			range: [0, 0.8, 1],
			output: [0, 0.1, 1]
		})
	};
	return (
		<SideMenuTheme>
			<animated.div
				style={{
					...props,
					padding: props.o
						.interpolate({ range: [0, 0.5, 1], output: [0, 0, 4] })
						.interpolate((o: number) => `${o}rem ${o / 4}rem`),
					opacity: props.opacity.interpolate({
						range: [0, 0.6, 1],
						output: [0, 0.3, 1]
					})
				}}
			>
				<ThemedUl>
					<animated.li style={opacityStyle}>
						<Link to='/'>top</Link>
					</animated.li>
					<animated.li style={opacityStyle}>
						<Link to='/about'>about</Link>
					</animated.li>
					<animated.li style={opacityStyle}>
						<Link to='/skills'>skills</Link>
					</animated.li>
					<animated.li style={opacityStyle}>
						<Link to='/posts'>posts</Link>
					</animated.li>
					<animated.li style={opacityStyle}>
						<Link to='/contact'>contact</Link>
					</animated.li>
				</ThemedUl>
				<ThemedIconsUl>
					<animated.li style={opacityStyle}>
						<a href='https://github.com/hppRC'>
							<span style={{ display: 'none' }}>github</span>
							<UseAnimations animationKey='github' size={40} />
						</a>
					</animated.li>
					<animated.li style={opacityStyle}>
						<a
							href={`https://${
								isMobile ? 'mobile.' : ''
							}twitter.com/osaremochi`}
						>
							<span style={{ display: 'none' }}>twitter</span>
							<UseAnimations animationKey='twitter' size={50} />
						</a>
					</animated.li>
				</ThemedIconsUl>
			</animated.div>
		</SideMenuTheme>
	);
};

export default SideMenu;
