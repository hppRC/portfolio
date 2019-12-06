import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';

const config = {
  from: { opacity: 0, height: 0 },
  enter: { opacity: 1, height: 70 },
  leave: { opacity: 0, height: 0 }
};

const TopMessage: React.FCX = ({ className }) => {
  const ref: any = useRef([]);
  const [items, set] = useState<(string | JSX.Element)[]>([]);
  const transitions = useTransition(items, null, config);

  useEffect(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([`Hello,`, `I'm`, `hpp`]), 300));
    ref.current.push(setTimeout(() => set([`I'm`, `hpp`]), 1200));
    ref.current.push(setTimeout(() => set([`Developer`]), 1750));
    ref.current.push(setTimeout(() => set([`Developer`, `&`]), 2500));
    ref.current.push(setTimeout(() => set([`Developer`, `Creator`]), 3000));
    ref.current.push(setTimeout(() => set([`Enjoy`]), 4000));
    ref.current.push(setTimeout(() => set([`Enjoy`, `this`]), 4750));
    ref.current.push(setTimeout(() => set([`Enjoy`, `this`, `website`]), 5250));
    ref.current.push(setTimeout(() => set([<StyledHppPortfolio />]), 6100));
    return () => ref.current.map(clearTimeout);
  }, []);

  return (
    <section className={className}>
      {transitions.map(({ item, props, key }: any) => (
        <animated.h3 key={key} style={props}>
          {item}
        </animated.h3>
      ))}
    </section>
  );
};

export const StyledTopMessage = styled(TopMessage)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 100vw;
  height: 100vh;

  padding: 5rem 10%;
  font-size: 3.5rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 8%;
    font-size: 3.15rem;
  }

  @media screen and (max-width: 480px) {
    padding: 2.75rem 6%;
    font-size: 2.85rem;
  }
`;

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

const StyledHppPortfolio = styled(HppPortfolio)`
  display: flex;
`;

export default StyledTopMessage;
