import React, { useState } from 'react';
import { Layout } from '../layouts';
import {
	AboutMDX,
	IntroMDX,
	ProjectsMDX,
	BackgroundArt
} from '../sections/index';
import { useTrail, animated } from 'react-spring';

export const Index = () => (
	<Layout>
		<BackgroundArt />
		<Intro />
	</Layout>
);

const items = ['Lorem', 'ipsum', 'dolor', 'sit'];
const config = { mass: 5, tension: 2000, friction: 200 };

const Intro = () => {
	const [toggle, set] = useState(true);
	const trail = useTrail(items.length, {
		config,
		opacity: toggle ? 1 : 0,
		x: toggle ? 0 : 20,
		height: toggle ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 }
	});

	return (
		<div className='trails-main' onClick={() => set(state => !state)}>
			<div>
				{trail.map(({ x, height, ...rest }, index) => (
					<animated.div
						key={items[index]}
						className='trails-text'
						style={{
							...rest,
							transform: x.interpolate(
								x => `translate3d(0,${x}px,0)`
							)
						}}
					>
						<animated.div style={{ height }}>
							{items[index]}
						</animated.div>
					</animated.div>
				))}
			</div>
		</div>
	);
};

export default Index;
