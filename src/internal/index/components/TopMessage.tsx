import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';
import UseAnimations from 'react-useanimations';
import { isBrowser } from 'react-device-detect';

const config = {
	from: {
		opacity: 0,
		height: 0,
		innerHeight: 0,
		color: '#fff'
	},
	enter: [{ opacity: 1, height: isBrowser ? 60 : 40 }],
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
		font-size: 2.75rem;
	}
`;

export const TopMessage = () => {
	const [show, setShow]: [boolean, any] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShow((prev: boolean) => !prev);
		}, 500);
		return () => clearTimeout(timer);
	}, []);
	return <>{show ? <Title /> : <PlaceHolder />}</>;
};

export const PlaceHolder = () => (
	<Theme>
		<UseAnimations animationKey='loading2' size={40} />
	</Theme>
);

export const Title = () => {
	const ref: any = useRef([]);
	const [items, set]: [(string | JSX.Element)[], any] = useState([]);
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
		return () => {
			ref.current.map((id: number) => {
				clearTimeout(id);
			});
		};
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
			setTimeout(() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r']), 600)
		);
		ref.current.push(
			setTimeout(() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r', 't']), 700)
		);
		ref.current.push(
			setTimeout(
				() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r', 't', 'f']),
				800
			)
		);
		ref.current.push(
			setTimeout(
				() => set(['h', 'p', 'p', ' ', 'P', 'o', 'r', 't', 'f', 'o']),
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
						'l'
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
						'i'
					]),
				1100
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
				1200
			)
		);
		return () => {
			ref.current.map((id: number) => {
				clearTimeout(id);
			});
		};
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
