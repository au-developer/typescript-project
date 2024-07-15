import styled from "@emotion/styled";
import {colors} from "styles/colors"

interface StyleErrorProps {
  $error?: undefined | string;
}

// Общая функция для изменения стилей
const getStyledInputBorder = (
  disabled: boolean | undefined,
  error: string | undefined
) => {
  if (typeof error === "string") {
    return colors.ERROR;
  } else if (disabled) {
    return "grey";
  } else {
    return colors.DISABLED;
  }
};

const changeInputBackGround = (disabled: boolean | undefined) => {
  if (disabled) {
    return colors.DISABLED;
  }
};

const changeInputColorBorder = (
  disabled: boolean | undefined,
  error: string | undefined
) => {
  if (error && disabled === false) {
    return colors.ERROR;
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
  border-color: ${({ disabled, $error }) =>changeInputColorBorder(disabled, $error)};
  background-color: ${({ disabled }) => changeInputBackGround(disabled)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  & ::placeholder {
    color: ${colors.PLACEHOLDER};
    font-size: 16px;
  }
`;
