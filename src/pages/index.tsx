import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import fragmentShaderSource from 'src/shader/index.frag';
import fragment2Shader from 'src/shader/index2.frag';
import vertexShaderSource from 'src/shader/index.vert';
import FluidAnimation from 'src/components/sample-fluid';
import { validateNotNull } from 'src/utils/validateNotNull';
import { FluidManager } from 'src/fluid/fluid-manager';

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

const Thing = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = validateNotNull(ref.current);
    const fluidManager = new FluidManager(canvas);
    function animate() {
      fluidManager.update();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);
  return (
    <canvas ref={ref} />
  );
};

const Index = () => (
  <div className="h-full w-full relative">
    <Thing />
    {/* <div className="absolute top-0 left-0 w-full h-full">
      <Canvas className="h-full w-full" camera={{ position: [0, 0, 1.5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Art />
      </Canvas>
    </div> */}
    {/* <FluidAnimation className="h-full w-full" /> */}
  </div>
);

export default Index;
