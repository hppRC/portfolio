import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { useTransition, useSpring, useChain, config } from 'react-spring';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
import data from './data';

const Theme = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rem 0;
	a {
		color: #fff;
		text-decoration: none;
		transition: opacity 0.3s;
		:hover {
			opacity: 0.5;
		}
	}
	z-index: 0;
`;

const Container = styled(animated.div)`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	padding: 2rem;
	width: 100%;
	border: solid 1px #fff;
	border-radius: 5px;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}

	will-change: grid-gap, height, width;
`;

const Item = styled(animated.div)`
	display: flex;
	align-items: center;

	width: 100%;
	border: solid 1px #fff;
	border-radius: 5px;
	fill: #fff;
	color: #fff;

	svg {
		width: 5rem;
		height: 5rem;
	}
	will-change: transform, opacity, width, height;
`;

export const SkillsTable = () => {
	const [open, set] = useState(false);

	const springRef: any = useRef();
	const { width, opacity, ...rest }: any = useSpring({
		ref: springRef,
		config: config.stiff,
		from: {
			width: '5%',
			opacity: 1,
			gridGap: '0vw',
			backgroundColor: '#fff'
		},
		to: {
			width: open ? '100%' : '5%',
			opacity: open ? 0 : 1,
			gridGap: open ? '2vw' : '0vw',
			backgroundColor: open ? '#ffffff00' : '#fff'
		}
	});

	const transRef: any = useRef();
	const transitions = useTransition(open ? data : [], item => item.name, {
		ref: transRef,
		unique: true,
		trail: 400 / data.length,
		from: {
			opacity: 0,
			transform: 'scale(0)',
			height: '0vh',
			padding: '0rem'
		},
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			height: '20vh',
			padding: '1rem'
		},
		leave: {
			opacity: 0,
			transform: 'scale(0)',
			height: '0vh',
			padding: '0rem'
		}
	});

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	useChain(open ? [springRef, transRef] : [transRef, springRef], [
		0,
		open ? 0.1 : 0.6
	]);

	return (
		<Theme>
			<Container
				style={{
					...rest,
					width: width,
					cursor: open ? 'default' : 'pointer'
				}}
				onClick={() => set(open => !open)}
			>
				{transitions.map(({ item, key, props }) => (
					<Link key={key} to={`/skills#${item.id}`}>
						<Item style={{ ...props }}>
							{item.icon}
							<h3>{item.name}</h3>
						</Item>
					</Link>
				))}
			</Container>
		</Theme>
	);
};

export default SkillsTable;
