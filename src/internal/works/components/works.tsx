import WorksMDX from '../documents/works.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	ul {
		padding: 4rem 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
		grid-gap: 2rem;

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
		}
		@media screen and (max-width: 480px) {
		}
	}
`;

export const Works = () => (
	<Theme>
		<WorksMDX />
	</Theme>
);

export default Works;
