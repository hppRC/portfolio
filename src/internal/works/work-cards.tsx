import styled from '@emotion/styled';

import WorksMDX from './works.mdx';

const WorkCards: React.FCX = ({ className }) => (
  <section className={className}>
    <WorksMDX />
  </section>
);

export const StyledWorkCards = styled(WorkCards)`
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
