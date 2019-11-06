import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import loadable from '@loadable/component';

const BackgroundArt = loadable(() => import('./BackgroundArt'));

const BackgroundTheme = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
`;

export const Background = () => {
	const [show, setShow]: [boolean, any] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShow((prev: boolean) => !prev);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	return <BackgroundTheme>{show && <BackgroundArt />}</BackgroundTheme>;
};
export default Background;
