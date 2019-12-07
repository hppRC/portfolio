import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type Props = {
  to: string;
};

const Internal: React.FCX<Props> = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

const InnerNav: React.FCX = ({ className }) => (
  <ul className={className}>
    <Internal to='/'>Top</Internal>
    <Internal to='/about'>About</Internal>
    <Internal to='/skills'>Skills</Internal>
    <Internal to='/works'>Works</Internal>
    <Internal to='/contact'>Contact</Internal>
  </ul>
);

export const StyledInnerNav = styled(InnerNav)`
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    padding: 0.3rem 0;
    a {
      font-size: 3rem;
      text-decoration: none;
      color: #fff;
      transition: opacity 0.3s;
      :hover {
        opacity: 0.6;
      }
    }
  }
`;

export default StyledInnerNav;
