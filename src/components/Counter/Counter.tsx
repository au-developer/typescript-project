//import { useState } from "react";

import Button from "components/Button/Button";

import { CounterWrapper, ButtonControlWrapper, CountView } from "./styles";

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({ count, onPlus, onMinus }: CounterProps) {
  // Функция-хук useSate() возвращает массив из 2 элементов
  // - 1 элемент - это переменная сотояния
  // - 2 элемент - функция, которая меняет это состояние
  // По умолчанию count = undefined, если мы ничего не передадим в качестве аргумента в функцию useState()

  //const [count, setCount] = useState<number>(0);
  // const onPlus = (): void => {
  //   setCount((prevValue: number) => {
  //     return prevValue + 1;
  //   });
  // };
  // const onMinus = (): void => {
  //   setCount((prevValue: number) => {
  //     return prevValue - 1;
  //   });
  // };

  return (
    <CounterWrapper>
      <ButtonControlWrapper>
        <Button name="-" onClick={onMinus} />
      </ButtonControlWrapper>
      <CountView>{count}</CountView>
      <ButtonControlWrapper>
        <Button name="+" onClick={onPlus} />
      </ButtonControlWrapper>
    </CounterWrapper>
  );
}

export default Counter;
