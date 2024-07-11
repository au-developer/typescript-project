import styled from "@emotion/styled";

export const CounterWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 400px;
  height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(26, 35, 53);
  color: white;
`;

export const ButtonControlWrapper = styled("div")`
  width: 80px;
`;

export const CountView = styled("p")`
  font-size: 40px;
  color: white;
`;