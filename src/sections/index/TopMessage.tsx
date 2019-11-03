import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';

const config = {
	from: {
		opacity: 0,
		height: 0,
		innerHeight: 0,
		color: '#bbb'
	},
	enter: [
		{ opacity: 1, height: 80, innerHeight: 80 },
		{
			color: '#f5a500'
		}
	],
	leave: [
		{ color: '#c23369' },
		{ innerHeight: 0 },
		{ opacity: 0, height: 0 }
	],
	update: { color: '#fff' }
};

const Theme = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	width: 100vw;
	height: 100vh;
	font-size: 4rem;
	font-weight: bold;
`;

export const TopMessage = () => {
	const ref: any = useRef([]);
	const [items, set]: [any, any] = useState([]);
	const transitions = useTransition(items, null, config);

	useEffect(() => {
		ref.current.map(clearTimeout);
		ref.current = [];
		set([]);
		ref.current.push(setTimeout(() => set([`Hello,`, `I'm`, `hpp`]), 1000));
		ref.current.push(setTimeout(() => set([`hpp`, `Portfolio`]), 3000));
		ref.current.push(
			setTimeout(() => set([`Enjoy`, `this`, `website`]), 5000)
		);
	}, []);

	return (
		<Theme>
			{transitions.map(({ item, props, key }: any) => (
				<animated.div key={key} style={props}>
					{item}
				</animated.div>
			))}
		</Theme>
	);
};

export default TopMessage;
