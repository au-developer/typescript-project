//import { useState } from "react";
import "./styles.ts";
import Button from "components/Button/Button";

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({count, onPlus,onMinus}:CounterProps) {
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
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
