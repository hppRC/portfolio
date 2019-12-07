import React from 'react';
import styled from '@emotion/styled';
import SkillsMDX from './skills.mdx';

const SkillCards: React.FCX = ({ className }) => (
  <section className={className}>
    <SkillsMDX />
  </section>
);

export const StyledSkillCards = styled(SkillCards)`
  ul {
    padding: 4rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    width: 100%;

    li {
      display: flex;
      padding: 1rem 0;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      li {
        padding: 0.75rem 0;
      }
    }

    @media screen and (max-width: 480px) {
      li {
        padding: 0.5rem 0;
      }
    }
  }
`;

export default StyledSkillCards;
