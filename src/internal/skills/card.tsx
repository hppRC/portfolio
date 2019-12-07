import React from 'react';
import styled from '@emotion/styled';
import data from './skill-cards-data';

const Card: React.FCX = ({ className, id, children }) => {
  const { icon, title } = data[id];
  return (
    <div className={className} id={id}>
      <div>
        <i>{icon}</i>
        {icon ? <h2>{title}</h2> : <h1>{title}</h1>}
      </div>
      <p>{children}</p>
    </div>
  );
};

export const StyledCard = styled(Card)`
  div {
    position: relative;
    top: 0;
    left: -1.5rem;
    display: flex;
    align-items: center;
    svg {
      width: 5rem;
      height: 5rem;
    }
    h1 {
      position: relative;
      top: 0;
      left: 1rem;
    }
  }
`;
export default StyledCard;
