import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import UseAnimations from 'react-useanimations';
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

export const SideMenu: React.FC<MenuInterface> = ({ open, toggle }) => {
	const props: any = useSpring({
		config: { mass: 5, friction: 50 },
		from: {
			o: 0,
			opacity: 0
		},
		o: 1,
		opacity: open ? 1 : 0,
		width: open ? 200 : 0,
		border: 'solid 1px #fff',
		backgroundColor: '#09090fb5',
		height: '100vh'
	});
	return (
		<SideMenuTheme>
			<animated.div
				style={{
					...props,
					padding: props.o
						.interpolate({ range: [0, 0.5, 1], output: [0, 0, 4] })
						.interpolate((o: number) => `${o}rem ${o / 4}rem`),
					opacity: props.opacity.interpolate([0, 0.6, 1], [0, 0.3, 1])
				}}
			>
				<ThemedUl>
					<animated.li
						style={{
							opacity: props.opacity.interpolate(
								[0, 0.8, 1],
								[0, 0.1, 1]
							)
						}}
					>
						<Link to='/about'>about</Link>
					</animated.li>
					<animated.li
						style={{
							opacity: props.opacity.interpolate(
								[0, 0.8, 1],
								[0, 0.1, 1]
							)
						}}
					>
						<Link to='/posts'>posts</Link>
					</animated.li>
					<animated.li
						style={{
							opacity: props.opacity.interpolate(
								[0, 0.8, 1],
								[0, 0.1, 1]
							)
						}}
					>
						<Link to='/contact'>contact</Link>
					</animated.li>
				</ThemedUl>
				<ThemedIconsUl>
					<animated.li
						style={{
							opacity: props.opacity.interpolate(
								[0, 0.8, 1],
								[0, 0.1, 1]
							)
						}}
					>
						<a href='https://github.com/hppRC'>
							<UseAnimations animationKey='github' size={40} />
						</a>
					</animated.li>
					<animated.li
						style={{
							opacity: props.opacity.interpolate(
								[0, 0.8, 1],
								[0, 0.1, 1]
							)
						}}
					>
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
