import WorksMDX from './works.mdx';
import styled from '@emotion/styled';

const WorkCards: React.FCX = ({ className }) => (
  <section className={className}>
    <WorksMDX />
  </section>
);

export const StyledWorkCards = styled(WorkCards)`
  padding-top: 4rem;
  h1 {
    font-size: 5rem;
    padding-top: 2rem;
  }
  p {
    padding: 2rem 0 6rem 0;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    list-style: none;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 480px) {
    }
  }
`;

export default StyledWorkCards;
