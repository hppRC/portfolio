import styled from '@emotion/styled';

export const BaseTheme = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	list-style-position: inside;
	> h1:first-of-type {
		margin: 0 auto;
		padding: 2rem 0;
		font-size: 3.2rem;
	}
`;

export default BaseTheme;
