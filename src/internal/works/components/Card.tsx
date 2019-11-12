import styled from '@emotion/styled';

const Theme = styled.div`
	color: #fff;
	img {
		width: 100%;
		height: auto;
		border-radius: 5px;
	}
	h2,
	p {
		padding: 1.5rem;
	}
	z-index: -1;
`;

const StyledA = styled.a`
	text-decoration: none;
	transition: all 0.3s ease 0s;
	:hover {
		box-shadow: 0 3px 6px 0 #000;
		transform: translateY(-0.1875em);

		::before {
			position: absolute;
			content: '';
			display: block;

			border-radius: 5px;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: rgba(255, 255, 255, 0.03);
		}
	}
`;

const StyledLi = styled.li`
	position: relative;
	list-style: none;
	cursor: pointer;
	z-index: -1;
`;

export const Card: React.FC<{ to: string }> = ({ to = '', children }) => (
	<StyledA href={to}>
		<StyledLi>
			<Theme>{children}</Theme>
		</StyledLi>
	</StyledA>
);

export default Card;
