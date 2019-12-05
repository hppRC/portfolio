import React from 'react';
import { CounterContainer } from '../store/ConterContainer';

interface CounterOperateProps {
  amount: number;
}
const CouterOperate: React.FC<CounterOperateProps> = props => {
  const counterContainer = CounterContainer.useContainer();
  const onClick = () => {
    counterContainer.add(props.amount);
  };
  return <button onClick={onClick}>amount : {props.amount}</button>;
};

const CouterReset: React.FC = () => {
  const counterContainer = CounterContainer.useContainer();
  const onClick = () => {
    counterContainer.reset();
  };
  return <button onClick={onClick}>リセット</button>;
};

const CouterDisplay: React.FC = () => {
  const counterContainer = CounterContainer.useContainer();
  return <div>count : {counterContainer.count}</div>;
};

export const CounterComponent: React.FC = () => {
  return (
    <>
      <CouterOperate amount={1} />
      <CouterOperate amount={10} />
      <CouterOperate amount={-1} />
      <CouterReset />
      <CouterDisplay />
    </>
  );
};

export default CounterComponent;
