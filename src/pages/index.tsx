import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import fragmentShader from 'src/shader/index.frag';
import vertexShader from 'src/shader/index.vert';

const Art = () => {
  const ref: any = useRef();

  const uniforms = {
    time: {
      value: 0.0,
    },
  };

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    uniforms.time.value = time;
  });

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" />
      <shaderMaterial
        attach="material"
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const Index = () => (
  <Canvas camera={{ position: [0, 0, 1.5] }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Art />
  </Canvas>
);

export default Index;
