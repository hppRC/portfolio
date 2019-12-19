import React from 'react';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import { MenuContainer } from '../../store';

const openedTransformationConfig = {
  top: `translate(2, 7) rotate(0)`,
  center: `translate(2, 19) rotate(0)`,
  bottom: `translate(2, 31) rotate(0)`,
  color: `#fff`
};

const closedTransformationConfig = {
  top: `translate(5, 32) rotate(-45)`,
  center: `translate(10, 4) rotate(45)`,
  bottom: `translate(5, 32) rotate(-45)`,
  color: `#fff`
};

const MenuButton: React.FCX = ({ className }) => {
  const { open, toggle } = MenuContainer.useContainer();

  const { top, center, bottom, color }: { [key: string]: string } = useSpring({
    to: open ? closedTransformationConfig : openedTransformationConfig,
    config: { mass: 1, friction: 15, tension: 75 },
    onStart: () => {
      console.log('animation start!');
    }
  });

  return (
    <animated.svg
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill={color}
      onClick={toggle}
      className={className}
    >
      <animated.rect width='40' height='3' rx='2' transform={top} />
      <animated.rect width='40' height='3' rx='3' transform={center} />
      <animated.rect width='40' height='3' rx='3' transform={bottom} />
    </animated.svg>
  );
};

export const StyledMenuButton = styled(MenuButton)`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;

export default StyledMenuButton;
