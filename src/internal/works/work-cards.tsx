import WorksMDX from './works.mdx';
import styled from '@emotion/styled';

const WorkCards: React.FCX = ({ className }) => (
  <section className={className}>
    <WorksMDX />
  </section>
);

export const StyledWorkCards = styled(WorkCards)`
  h1 {
    font-size: 5rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 480px) {
    }
  }
`;

export default StyledWorkCards;
