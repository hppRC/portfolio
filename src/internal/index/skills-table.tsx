import { Link } from 'gatsby';
import React, { useRef, useState } from 'react';
import { animated, useChain, useSpring, useTransition } from 'react-spring';

import styled from '@emotion/styled';

import data from './skills-data';
import { StyledItem as Item } from './skills-table-item';

const SkillsTable: React.FCX = ({ className }) => {
  const [open, set] = useState(false);
  const toggle = () => set(open => !open);

  const springRef: any = useRef();
  const { opacity, ...rest }: any = useSpring({
    ref: springRef,
    config: { mass: 0.1, frictoin: 25, tension: 150 },
    from: {
      width: '5%',
      opacity: 1,
      gridGap: '0vw',
      backgroundColor: '#fff',
      cursor: 'pointer'
    },
    to: {
      width: open ? '100%' : '5%',
      opacity: open ? 0 : 1,
      gridGap: open ? '2vw' : '0vw',
      backgroundColor: open ? '#ffffff00' : '#fff',
      cursor: open ? 'default' : 'pointer'
    }
  });

  const transRef: any = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    trail: 1500 / data.length,
    from: {
      opacity: 0,
      transform: 'scale(0)',
      height: '0vh',
      padding: '0rem'
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
      height: '20vh',
      padding: '1rem'
    },
    leave: {
      opacity: 0,
      transform: 'scale(0)',
      height: '0vh',
      padding: '0rem'
    }
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 1.5
  ]);

  return (
    <animated.div className={className} style={{ ...rest }} onClick={toggle}>
      {transitions.map(({ item, key, props }) => (
        <Link key={key} to={`/skills#${item.id}`}>
          <Item icon={item.icon} name={item.name} style={{ ...props }} />
        </Link>
      ))}
    </animated.div>
  );
};

export const StyledSkillsTable = styled(SkillsTable)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-width: 5rem;
  min-height: 5rem;

  border-radius: 5px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  will-change: height, width;
`;

export default StyledSkillsTable;
