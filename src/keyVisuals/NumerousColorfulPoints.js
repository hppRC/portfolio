import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const style = {
	width: '100vw',
	height: '100vh',
	backgroundColor: '#000',
	position: 'fixed',
	top: '0',
	left: '0'
};

const vertexSource = `
precision mediump float;
uniform float time;
uniform float point_size;
attribute vec4 color;
varying vec4 vColor;
varying vec3 pos;

void main() {
	vColor = color;
	pos = vec3(position);
	gl_PointSize = point_size;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

//gl_Position = vec4(tmp.x * sin(tmp.y + tmp.z * time / randx + tmp.y) * atan(time), sin(tmp.y * cos(tmp.z) - 0.001 * time * acos(tmp.x)), tmp.z * sin(atan(tmp.x * time / randx + tmp.y)), 1.0);

const fragmentSource = `
precision mediump float;
uniform float time;
varying vec4 vColor;
varying vec3 pos;
void main() {
	gl_FragColor = vec4(
		vColor.r * abs(sin(time + pos.z) + cos(pos.x)),
		vColor.g * abs(cos(time - vColor.b) + sin(pos.z)),
		vColor.b * abs(sin(time - pos.x) / abs(sin(time - vColor.b))),
		1.0
		);
}
`;

const Thing = () => {
	const ref = useRef();

	const uniforms = {
		time: {
			value: 0.0
		},
		point_size: {
			value:
				typeof window !== 'undefined' &&
				window.innerWidth / window.innerHeight
		}
	};

	const [positions, colors] = useMemo(() => {
		let positions = [];
		let colors = [];
		let x, y, z;
		for (let i = 0; i < 500; i++) {
			x = Math.random() * 2.0 - 1.0;
			y = Math.random() * 2.0 - 1.0;
			z = Math.random() * 2.0 - 1.0;

			if (x ** 2 + y ** 2 + z ** 2 <= 1) {
				positions.push(x * 0.4);
				positions.push(y * 0.4);
				positions.push(z * 0.4);
				colors.push(Math.random() * 255.0);
				colors.push(Math.random() * 255.0);
				colors.push(Math.random() * 255.0);
				colors.push(Math.random() * 255.0);
			}
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

const NumerousColorfulPoints = () => (
	<Canvas
		camera={{
			position: [
				0,
				0,
				typeof window !== 'undefined' &&
					window.innerHeight / window.innerWidth
			]
		}}
		style={style}
	>
		<Thing />
	</Canvas>
);
export default NumerousColorfulPoints;
