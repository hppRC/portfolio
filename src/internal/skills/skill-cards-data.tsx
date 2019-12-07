import React from 'react';
import {
  DiRust,
  DiPython,
  DiLaravel,
  DiReact,
  DiGo,
  DiHaskell,
  DiDocker,
  DiGithubBadge,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNginx
} from 'react-icons/di';

type Data = {
  [key: string]: {
    icon: JSX.Element | null;
    title: string;
  };
};

const data: Data = {
  python: { icon: <DiPython />, title: 'Python' },
  c: { icon: null, title: 'C/C++' },
  html: {
    icon: (
      <>
        <DiHtml5 />
        <DiCss3 />
      </>
    ),
    title: 'HTML/CSS'
  },
  react: { icon: <DiReact />, title: 'React' },
  gatsby: { icon: null, title: 'Gatsby' },
  javascript: { icon: <DiJavascript />, title: 'JavaScript' },
  haskell: { icon: <DiHaskell />, title: 'Haskell' },
  r: { icon: null, title: 'R' },
  laravel: { icon: <DiLaravel />, title: 'Laravel' },
  rust: { icon: <DiRust />, title: 'Rust' },
  go: { icon: <DiGo />, title: 'Go' },
  git: { icon: <DiGithubBadge />, title: 'Git/GitHub' },
  docker: { icon: <DiDocker />, title: 'Docker' },
  nginx: { icon: <DiNginx />, title: 'Nginx' }
};

export default data;
