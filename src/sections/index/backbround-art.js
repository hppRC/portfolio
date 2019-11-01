import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css } from '@emotion/core';

const theme = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #0b0b0b;
	z-index: -9999;
`;

const vertexSource = `
precision mediump float;
uniform float time;
attribute vec4 color;
varying vec4 vColor;
varying vec3 pos;

void main() {
	vColor = color;
	pos = vec3(
		position.x + cos(time) * sin(position.x + smoothstep(0., 1., position.z*sin(time))) * sin(time),
		position.y + fract(sin(0.001*time)) + sin(time) * sin(position.y + normalize(position.x * time)),
		position.z * sin(sin(sin(time)))
	);
	gl_PointSize = 1.5;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentSource = `
precision mediump float;
uniform float time;
varying vec4 vColor;
varying vec3 pos;

void main() {
	gl_FragColor = vec4(
		sin(tan(time - 2.0) / abs(vColor.r)),
		vColor.g * abs(cos(time*0.4 - vColor.b) + pos.z),
		vColor.b * abs(sin(time*0.4 - pos.x) / abs(sin(time*0.4 - vColor.b)) + abs(cos(time*0.4 - vColor.r))),
		1.0
		);
}
`;

const Thing = () => {
	const ref = useRef();

	const uniforms = {
		time: {
			value: 0.0
		}
	};

	const [positions, colors] = useMemo(() => {
		let positions = [];
		let colors = [];
		let x, y, z;
		for (let i = 0; i < 75000; i++) {
			x = Math.random() * 2.0 - 1.0;
			y = Math.random() * 2.0 - 1.0;
			z = Math.random() * 2.0 - 1.0;

			positions.push(x);
			positions.push(y);
			positions.push(z);
			colors.push(Math.random() * 255.0);
			colors.push(Math.random() * 255.0);
			colors.push(Math.random() * 255.0);
			colors.push(Math.random() * 255.0);
		}
		return [positions, colors];
	}, []);

	useFrame(({ clock }) => {
		const time = clock.getElapsedTime();
		uniforms.time.value = time;
		ref.current.rotation.x += (Math.PI / 720) * Math.sin(0.01 * time);
		ref.current.rotation.y += Math.PI / 1440;
	});

	return (
		<points ref={ref}>
			<bufferGeometry attach='geometry'>
				<bufferAttribute
					attachObject={['attributes', 'position']}
					count={positions.length / 3}
					array={new Float32Array(positions)}
					itemSize={3}
				/>
				<bufferAttribute
					attachObject={['attributes', 'color']}
					count={colors.length / 4}
					array={new Uint8Array(colors)}
					itemSize={4}
					normalized
				/>
			</bufferGeometry>
			<shaderMaterial
				attach='material'
				vertexShader={vertexSource}
				fragmentShader={fragmentSource}
				uniforms={uniforms}
				side={THREE.DoubleSide}
				transparent
			/>
		</points>
	);
};

export const BackgroundArt = () => (
	<div css={theme}>
		<Canvas
			camera={{
				position: [0, 0, 1]
			}}
			shadowMap
		>
			<Thing />
		</Canvas>
	</div>
);

export default BackgroundArt;
