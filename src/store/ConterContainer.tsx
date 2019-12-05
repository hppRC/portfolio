import { useState } from 'react';
import { createContainer } from 'unstated-next';

/**
 * カウンター操作用コンテナのHooks
 */
const useCountContainer = () => {
  // カウンターの数値と、数値更新用の関数を取得する
  const [count, setCount] = useState<number>(0);

  /**
   * カウンタを加算する
   * @param amount 加算する量
   */
  const add = (amount: number) => {
    setCount(count => count + amount);
  };

  /**
   * カウンタをリセットする
   */
  const reset = () => {
    setCount(0);
  };

  return { count, add, reset };
};

/** カウンター操作用コンテナ */
export const CounterContainer = createContainer(useCountContainer);
