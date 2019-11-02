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

const items = [<AboutMDX />, <IntroMDX />, <ProjectsMDX />];
const config = { mass: 2, tension: 2000, friction: 200 };

const Intro = () => {
	const trail = useTrail(items.length, {
		config,
		opacity: 1,
		x: 0,

		from: { opacity: 0, x: 20, height: 0 }
	});

	return (
		<div>
			{trail.map(({ x, height, ...rest }, index) => (
				<animated.div
					key={index}
					style={{
						...rest,
						transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
					}}
				>
					<animated.div style={{ color: 'white' }}>
						{items[index]}
					</animated.div>
				</animated.div>
			))}
		</div>
	);
};

export default Index;
