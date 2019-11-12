import styled from '@emotion/styled';

export const BaseTheme = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	list-style-position: inside;
	padding: 5rem 0;
	> h1:first-of-type {
		margin: 0 auto;
		padding: 4rem 0;
		font-size: 3.4rem;
	}
	@media (max-width: 540px) {
		> h1:first-of-type {
			font-size: 2.4rem;
		}
	}
`;

export default BaseTheme;
