import React from 'react';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import { MenuContainer } from '../../store';
import { isMobileOnly } from 'react-device-detect';

const openedTransformationConfig = {
  top: `translate(2, ${isMobileOnly ? 7 : 10.5}) rotate(0)`,
  center: `translate(2, ${isMobileOnly ? 19 : 28.5}) rotate(0)`,
  bottom: `translate(2, ${isMobileOnly ? 31 : 46.5}) rotate(0)`,
  color: `#fff`
};

const closedTransformationConfig = {
  top: `translate(5, ${isMobileOnly ? 32 : 48}) rotate(-45)`,
  center: `translate(10, ${isMobileOnly ? 4 : 6}) rotate(45)`,
  bottom: `translate(5, ${isMobileOnly ? 32 : 48}) rotate(-45)`,
  color: `#fff`
};

const MenuButton: React.FCX = ({ className }) => {
  const { open, toggle } = MenuContainer.useContainer();

  const { top, center, bottom, color }: { [key: string]: string } = useSpring({
    to: open ? closedTransformationConfig : openedTransformationConfig,
    config: { mass: 1, friction: 15, tension: 75 }
  });

  return (
    <animated.svg
      width={isMobileOnly ? 44 : 66}
      height={isMobileOnly ? 44 : 66}
      viewBox={isMobileOnly ? '0 0 44 44' : '0 0 66 66'}
      fill={color}
      onClick={toggle}
      className={className}
    >
      <animated.rect
        width={isMobileOnly ? 40 : 60}
        height={isMobileOnly ? 3 : 4}
        rx='2'
        transform={top}
      />
      <animated.rect
        width={isMobileOnly ? 40 : 60}
        height={isMobileOnly ? 3 : 4}
        rx='3'
        transform={center}
      />
      <animated.rect
        width={isMobileOnly ? 40 : 60}
        height={isMobileOnly ? 3 : 4}
        rx='3'
        transform={bottom}
      />
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
