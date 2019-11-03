import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import SideMenu from './SideMenu';
import MenuIcon from './MenuIcon';

export const Menu = () => {
	const [open, toggle] = useState(false);
	const props: any = useSpring({
		width: open ? 200 : 0,
		opacity: open ? 1 : 0
	});
	return (
		<div>
			{open ? (
				<SideMenu
					open={open}
					toggle={toggle}
					width={props.width}
					opacity={props.opacity}
				/>
			) : (
				<MenuIcon open={open} toggle={toggle} />
			)}
		</div>
	);
};

export default Menu;
