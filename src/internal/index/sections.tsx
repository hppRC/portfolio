import React from 'react';
import IntroMDX from './intro.mdx';
import AboutMDX from './about.mdx';
import SkillsMDX from './skills.mdx';
import WorksMDX from './works.mdx';
import EventsMDX from './events.mdx';
import styled from '@emotion/styled';
import indexBaseStyle from '../../styles/index-base-style';
import { StyledSkillsTable as SkillsTable } from './skills-table';

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

const Works: React.FCX = ({ className }) => (
  <section className={className}>
    <WorksMDX />
  </section>
);
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
