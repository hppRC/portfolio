import styled from '@emotion/styled';

const Card: React.FCX<{ href: string }> = ({ href, className, children }) => (
  <div className={className}>
    <a href={href}>{children}</a>
  </div>
);

export const StyledCard = styled(Card)`
  position: relative;

  padding: 1rem;

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

  a {
    color: #fff;
    text-decoration: none;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    box-shadow: 0px 3px 10px 0px #000;
  }
`;

export default StyledCard;
