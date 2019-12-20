import React from 'react';

import styled from '@emotion/styled';

import AboutMDX from './about.mdx';

const Introduction: React.FCX = ({ className }) => (
  <section className={className}>
    <AboutMDX />
  </section>
);

export const StyledIntroduction = styled(Introduction)`
  div {
    padding: 4rem 0;
  }
`;

export default StyledIntroduction;
