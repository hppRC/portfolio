import React from 'react';
import styled from '@emotion/styled';

type Props = {
  href: string;
};

const External: React.FCX<Props> = ({ href, children }) => (
  <li>
    <a href={href} target='_blank' rel='noopener norefferer'>
      {children}
    </a>
  </li>
);

const OuterNav: React.FCX = ({ className }) => (
  <ul className={className}>
    <External href={'https://blog.hpprc.com'}>blog</External>
    <External href={'https://github.com/hppRC'}>GitHub</External>
    <External href={'https://twitter.com/osaremochi'}>Twitter</External>
    <External href={'https://qiita.com/hppRC'}>Qiita</External>
  </ul>
);

export const StyledOuterNav = styled(OuterNav)``;

export default StyledOuterNav;
