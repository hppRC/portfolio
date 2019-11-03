import React from 'react';
import { useSpring, animated, config } from 'react-spring';

interface MenuInterface {
	open: boolean;
	toggle(open: boolean): void;
	width?: number;
	opacity?: number;
}

const openedTransformationConfig = {
	top: 'translate(2, 7) rotate(0)',
	center: 'translate(2, 19) rotate(0)',
	bottom: 'translate(2, 31) rotate(0)',
	color: '#fff' // Add color
};

const closedTransformationConfig = {
	top: 'translate(5, 32) rotate(-45)',
	center: 'translate(10, 4) rotate(45)',
	bottom: 'translate(5, 32) rotate(-45)',
	color: '#fff' // Add color
};

export const MenuIcon: React.FC<MenuInterface> = ({ open, toggle }) => {
	const { top, center, bottom, color }: any = useSpring({
		to: open ? closedTransformationConfig : openedTransformationConfig,
		config: config.stiff
	});
	return (
		<animated.svg
			width='44'
			height='44'
			viewBox='0 0 44 44'
			fill={color}
			onClick={() => toggle(!open)}
		>
			<animated.rect width='40' height='3' rx='2' transform={top} />
			<animated.rect width='40' height='3' rx='2' transform={center} />
			<animated.rect width='40' height='3' rx='2' transform={bottom} />
		</animated.svg>
	);
};

export default MenuIcon;
