import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';

const config = {
	from: {
		opacity: 0,
		height: 0,
		innerHeight: 0,
		color: '#fff'
	},
	enter: [{ opacity: 1, height: 80 }],
	leave: [{ opacity: 0, height: 0 }],
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
		ref.current.push(setTimeout(() => set([`Hello,`, `I'm`, `hpp`]), 500));
		ref.current.push(setTimeout(() => set([`hpp`, `Portfolio`]), 2000));
		ref.current.push(setTimeout(() => set([`Enjoy`]), 4000));
		ref.current.push(setTimeout(() => set([`Enjoy`, `this`]), 4750));
		ref.current.push(
			setTimeout(() => set([`Enjoy`, `this`, `website`]), 5250)
		);
		ref.current.push(setTimeout(() => set([]), 6500));
		ref.current.push(setTimeout(() => set([`hpp Portfolio`]), 7500));
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
