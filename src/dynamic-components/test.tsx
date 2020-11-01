import { Html, Reflector, Sky, Stars, Text } from '@react-three/drei';

const Test = () => (
  <>

    <Reflector>
      <Text
        color="black" // default
        anchorX="center" // default
        anchorY="middle"
      >
        hello world!
      </Text>
    </Reflector>
    <Sky
      distance={450000} // Camera distance (default=450000)
      sunPosition={[0, 0, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
      inclination={0.5} // Sun elevation angle from 0 to 1 (default=0)
      azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)

    />
    <Stars
      radius={100} // Radius of the inner sphere (default=100)
      depth={50} // Depth of area where stars should fit (default=50)
      count={5000} // Amount of stars (default=5000)
      factor={4} // Size factor (default=4)
      saturation={0} // Saturation 0-1 (default=0)
      fade
    />
    <Html
      className=""
    >
      <h1 className="block text-4xl font-bold whitespace-no-wrap">hello</h1>
      <p className="block text-4xl font-bold whitespace-no-wrap">world</p>
    </Html>
  </>
);

export default Test;
