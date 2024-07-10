import styled from "@emotion/styled";

interface StyleErrorProps {
  error?: undefined | string;
}

const changeInputBackGround = (disabled: boolean | undefined) => {
  if (disabled) {
    return "grey";
  }
};

const changeInputColorBorder = (
  disabled: boolean | undefined,
  error: string | undefined
) => {
  if (error && disabled === false) {
    return "red";
  }
};

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled("label")`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled("input")<StyleErrorProps>`
  width: 100%;
  height: 50px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  padding: 12px;
  outline: none;
  border-color: ${({ disabled, error }) =>
    changeInputColorBorder(disabled, error)};
  background-color: ${({ disabled }) => changeInputBackGround(disabled)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
