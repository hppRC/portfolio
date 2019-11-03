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
		ref.current.push(setTimeout(() => set([`Hello,`, `I'm`, `hpp`]), 300));
		ref.current.push(setTimeout(() => set([`I'm`, `hpp`]), 1200));
		ref.current.push(setTimeout(() => set([`Developer`]), 1750));
		ref.current.push(setTimeout(() => set([`Developer`, `&`]), 2500));
		ref.current.push(setTimeout(() => set([`Developer`, `Creator`]), 3000));
		ref.current.push(setTimeout(() => set([`Enjoy`]), 4000));
		ref.current.push(setTimeout(() => set([`Enjoy`, `this`]), 4750));
		ref.current.push(
			setTimeout(() => set([`Enjoy`, `this`, `website`]), 5250)
		);
		ref.current.push(setTimeout(() => set([<HppPortfolio />]), 6100));
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

const TitleTheme = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 4rem;
	font-weight: bold;
`;

export const HppPortfolio = () => {
	const ref: any = useRef([]);
	const [items, set]: [any, any] = useState([]);
	const transitions = useTransition(items, null, config);

	useEffect(() => {
		ref.current.map(clearTimeout);
		ref.current = [];
		set([]);
		ref.current.push(setTimeout(() => set(['h']), 100));
		ref.current.push(setTimeout(() => set(['h', 'p']), 200));
		ref.current.push(setTimeout(() => set(['h', 'p', 'p']), 300));
		ref.current.push(setTimeout(() => set(['h', 'p', 'p', ' ']), 350));
		ref.current.push(setTimeout(() => set(['h', 'p', 'p', ' ', 'P']), 400));
		ref.current.push(
			setTimeout(() => set(['h', 'p', 'p', ' ', 'P', 'o']), 500)
		);
		ref.current.push(
			setTimeout(() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r']), 500)
		);
		ref.current.push(
			setTimeout(() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r', 't']), 600)
		);
		ref.current.push(
			setTimeout(
				() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r', 't', 'f']),
				700
			)
		);
		ref.current.push(
			setTimeout(
				() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r', 't', 'f', 'o']),
				800
			)
		);
		ref.current.push(
			setTimeout(
				() =>
					set([
						'h',
						'p',
						'p',
						' ',
						'P',
						'o',
						'r',
						't',
						'f',
						'o',
						'l'
					]),
				900
			)
		);
		ref.current.push(
			setTimeout(
				() =>
					set([
						'h',
						'p',
						'p',
						' ',
						'P',
						'o',
						'r',
						't',
						'f',
						'o',
						'l',
						'i'
					]),
				1000
			)
		);
		ref.current.push(
			setTimeout(
				() =>
					set([
						'h',
						'p',
						'p',
						' ',
						'P',
						'o',
						'r',
						't',
						'f',
						'o',
						'l',
						'i',
						'o'
					]),
				1100
			)
		);
	}, []);

	return (
		<TitleTheme>
			{transitions.map(({ item, props, key }: any, index: number) => (
				<animated.div key={`${key}${index}`} style={props}>
					{item}
				</animated.div>
			))}
		</TitleTheme>
	);
};

export default TopMessage;
