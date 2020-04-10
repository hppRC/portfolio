import React, { useRef } from 'react';
import useIsInViewport from 'use-is-in-viewport';

import styled from '@emotion/styled';

import indexBaseStyle from '../../styles/index-base-style';
import AboutMDX from './about.mdx';
import EventsMDX from './events.mdx';
import IntroMDX from './intro.mdx';
import { StyledSkillsTable as SkillsTable } from './skills-table';
import SkillsMDX from './skills.mdx';
import WorksMDX from './works.mdx';

const Intro: React.FCX = ({ className }) => (
  <section className={className}>
    <IntroMDX />
  </section>
);
export const StyledIntro = styled(Intro)`
  ${indexBaseStyle}
`;

const About: React.FCX = ({ className }) => (
  <section className={className}>
    <AboutMDX />
  </section>
);
export const StyledAbout = styled(About)`
  ${indexBaseStyle}
`;

const Skills: React.FCX = ({ className }) => (
  <section className={className}>
    <SkillsMDX />
    <SkillsTable />
  </section>
);
export const StyledSkills = styled(Skills)`
  ${indexBaseStyle}
  > div:nth-of-type(1) {
    padding-bottom: 4rem;
  }
`;

const Works: React.FCX = ({ className }) => {
  const targetRef = useRef(null);
  const [isInViewport, wrappedTargetRef] = useIsInViewport({
    target: targetRef
  });

  const test = () => {
    if (isInViewport) {
      return 'in viewport';
    } else {
      return 'test';
    }
  };

  return (
    <section className={className}>
      <WorksMDX />
      <div ref={wrappedTargetRef}>{test()}</div>
    </section>
  );
};
export const StyledWorks = styled(Works)`
  ${indexBaseStyle}
`;

const Events: React.FCX = ({ className }) => (
  <section className={className}>
    <EventsMDX />
  </section>
);
export const StyledEvents = styled(Events)`
  ${indexBaseStyle}
`;
