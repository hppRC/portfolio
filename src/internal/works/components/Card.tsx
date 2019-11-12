import styled from '@emotion/styled';

const Theme = styled.div`
	color: #fff;
	img {
		width: 100%;
		height: auto;
		border-radius: 5px;
	}
`;

const StyledA = styled.a`
	cursor: pointer;
	text-decoration: none;
`;

const StyledLi = styled.li`
	list-style: none;
`;

export const Card: React.FC<{ to: string }> = ({ to, children }) => (
	<StyledLi>
		<StyledA href={to}>
			<Theme>{children}</Theme>
		</StyledA>
	</StyledLi>
);

export default Card;
