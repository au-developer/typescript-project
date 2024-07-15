//import { useState } from "react";

import Button from "components/Button/Button";

import { CounterWrapper, ButtonControlWrapper, CountView } from "./styles";

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({ count, onPlus, onMinus }: CounterProps) {

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
