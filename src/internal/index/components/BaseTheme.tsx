import styled from '@emotion/styled';

export const BaseTheme = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	list-style-position: inside;
	padding: 5rem 0;
	> h1:first-of-type {
		margin: 0 auto;
		padding: 4rem 0;
		font-size: 3.2rem;
	}
`;

export default BaseTheme;
