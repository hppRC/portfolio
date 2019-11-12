import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';
import { isBrowser } from 'react-device-detect';

const config = {
	from: {
		opacity: 0,
		height: 0,
		innerHeight: 0,
		color: '#fff'
	},
	enter: [{ opacity: 1, height: isBrowser ? 60 : 50 }],
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
	font-size: 3.5rem;
	font-weight: bold;
	@media screen and (max-width: 768px) {
		padding: 4rem 10%;
		font-size: 3.15rem;
	}

	@media screen and (max-width: 480px) {
		padding: 3rem 10%;
		font-size: 2.6rem;
	}
`;

export const TopMessage = () => {
	const ref: any = useRef([]);
	const [items, set] = useState<(string | JSX.Element)[]>([]);
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
		return () => ref.current.map(clearTimeout);
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
`;

export const HppPortfolio = () => {
	const ref: any = useRef([]);
	const [items, set] = useState<string[]>([]);
	const transitions = useTransition(items, null, config);
	const Title = 'hpp Portfolio';

	useEffect(() => {
		ref.current.map(clearTimeout);
		ref.current = [];
		set([]);
		ref.current.push(setTimeout(() => set([...Title.slice(0, 1)]), 100));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 2)]), 200));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 3)]), 300));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 4)]), 350));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 5)]), 400));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 6)]), 500));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 7)]), 600));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 8)]), 700));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 9)]), 800));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 10)]), 900));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 11)]), 1000));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 12)]), 1100));
		ref.current.push(setTimeout(() => set([...Title.slice(0, 13)]), 1200));
		return () => ref.current.map(clearTimeout);
	}, []);

	return (
		<TitleTheme>
			{transitions.map(({ item, props }: any, index: number) => (
				<animated.div key={`${index}`} style={props}>
					{item}
				</animated.div>
			))}
		</TitleTheme>
	);
};

export default TopMessage;
