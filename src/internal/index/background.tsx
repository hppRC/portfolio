import React from 'react';
import styled from '@emotion/styled';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { isMobile } from 'react-device-detect';

const vertexSource = `
precision mediump float;
uniform float time;
attribute vec4 color;
varying vec4 vColor;
varying vec3 pos;

void main() {
	vColor = color;
	pos = vec3(
		(sin(time * .053) + cos(time * 0.03 + 32.) + 1.) * position.x + sin(time * .1 + 20.) * (position.x * ( 1. / time + cos(position.x) * position.x * sin(1. + position.z * time) * cos(1.2 * position.x * sin(cos(position.z + 0.01 * sin(0.5 * time))) + sin(cos(0.5 * time) * position.y)))),
		(cos(time * .23 - position.x) + 1.) * position.y + position.y * (1. / time + sin(position.z + 0.5 * time) * position.y * cos(0.001*0.5 * time + position.z + sin(cos(sin(1. - sin(0.5 * time) * cos(0.5 * time)) + sin(0.5 * time)) + sin(cos(0.5 * time)) + 0.5 * time * sin(position.y))) * cos(position.x * cos(sin(0.23 * time)))),
		position.z + position.z * (1. / abs(0.5 * time - 100.) + cos(0.0025*0.5 * time) * position.z + sin(sin(position.y * sin(cos(0.5 * time) + 0.5 * time * sin(position.y)) * cos(position.x * cos(sin(0.3218 * time - 2.2))))))
		);
	gl_PointSize = ${isMobile ? '0.75' : '1.0'};
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
		.1 + vColor.r * abs(sin(time*0.4 + pos.z) + pos.x),
		vColor.g * abs(cos(time*0.4 - vColor.b) + pos.z),
		vColor.b * abs(sin(time*0.4 - pos.x) / abs(sin(time*0.4 - vColor.b)) + abs(cos(time*0.4 - vColor.r))),
		1.0
	);
}
`;

const Thing = () => {
  const ref: any = useRef();

  const uniforms = {
    time: {
      value: 0.0
    }
  };

  const [positions, colors] = useMemo(() => {
    let positions = [];
    let colors = [];
    const points = isMobile ? 25000 : 50000;
    for (let i = 0; i < points; i++) {
      positions.push(Math.random() * 2.0 - 1.0);
      positions.push(Math.random() * 2.0 - 1.0);
      positions.push(Math.random() * 2.0 - 1.0);
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
        transparent
      />
    </points>
  );
};

const Background: React.FCX = ({ className }) => (
  <div className={className}>
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Thing />
    </Canvas>
  </div>
);

export const StyledBackground = styled(Background)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

export default StyledBackground;
