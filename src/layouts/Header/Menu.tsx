import React, { useState } from 'react';
import SideMenu from './SideMenu';
import MenuIcon from './MenuIcon';
import styled from '@emotion/styled';

const Theme = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
`;

export const Menu = () => {
	const [open, toggle] = useState(false);
	return (
		<Theme>
			<SideMenu open={open} toggle={toggle} />
			<MenuIcon open={open} toggle={toggle} />
		</Theme>
	);
};

export default Menu;
