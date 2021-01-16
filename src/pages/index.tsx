import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import fragmentShader from 'src/shader/index.frag';
import vertexShader from 'src/shader/index.vert';
import FluidAnimation from 'src/components/fluid';

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
  <div className="flex align-middle h-full w-full">
    <FluidAnimation styles={{ height: '100vh' }} />
    {/* <Canvas className="h-full" camera={{ position: [0, 0, 1.5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Art />
    </Canvas> */}
  </div>
);

export default Index;
