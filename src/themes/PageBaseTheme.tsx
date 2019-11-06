import styled from '@emotion/styled';

export const PageBaseTheme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 10% 10%;
	max-width: 1200px;
	margin: 0 auto;
	list-style-position: inside;
	h1 {
		font-size: 3.5rem;
	}
	@media screen and (max-width: 768px) {
		padding: 6rem 10%;
		h1 {
			font-size: 3rem;
		}
	}
	@media screen and (max-width: 480px) {
		padding: 8rem 10%;
		h1 {
			font-size: 2rem;
		}
	}
`;

export default PageBaseTheme;
