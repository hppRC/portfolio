import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';

const config = {
  from: { opacity: 0, height: 0 },
  enter: { opacity: 1, height: 70 },
  leave: { opacity: 0, height: 0 }
};

const HppPortfolio: React.FCX = ({ className }) => {
  const ref: any = useRef([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, null, config);
  const Title = 'hpp Portfolio';

  useEffect(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([...Title.slice(0, 1)]), 100));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 2)]), 200));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 3)]), 300));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 4)]), 350));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 5)]), 400));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 6)]), 500));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 7)]), 600));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 8)]), 700));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 9)]), 800));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 10)]), 900));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 11)]), 1000));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 12)]), 1100));
    ref.current.push(setTimeout(() => set([...Title.slice(0, 13)]), 1200));
    return () => ref.current.map(clearTimeout);
  }, []);

  return (
    <div className={className}>
      {transitions.map(({ item, props }: any, i: number) => (
        <animated.h3 key={i} style={props}>
          {item}
        </animated.h3>
      ))}
    </div>
  );
};

export const StyledHppPortfolio = styled(HppPortfolio)`
  display: flex;
`;

export default StyledHppPortfolio;
