import React, { useRef, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';
import { StyledHppPortfolio as HppPortfolio } from './hpp-portfolio';
import { isMobile } from 'react-device-detect';

const config = {
  from: { opacity: 0, height: 0 },
  enter: { opacity: 1, height: isMobile ? 40 : 60 },
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
    ref.current.push(setTimeout(() => set([<HppPortfolio />]), 6100));
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
  width: 100%;
  height: 100vh;

  font-size: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export default StyledTopMessage;
