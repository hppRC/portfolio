import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import SideMenu from './SideMenu';
import MenuIcon from './MenuIcon';

export const Menu = () => {
	const [open, toggle] = useState(false);
	return (
		<div>
			<SideMenu open={open} toggle={toggle} />

			<MenuIcon open={open} toggle={toggle} />
		</div>
	);
};

export default Menu;
