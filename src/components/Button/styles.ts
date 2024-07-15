import styled from "@emotion/styled";
import { colors } from "styles/colors";

interface StyledButtonProps{
  $isRed?: boolean
}

const getButtonColor = (disabled:boolean | undefined, isRed:boolean  | undefined)=>{
  if(disabled){
    return "grey";
  }else if(isRed){
    return colors.ERROR;
  }else{return colors.PRIMARY_BLUE}

}

export const StyledButton = styled("button")<StyledButtonProps>`
  height: 70px;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  background-color: ${({disabled, $isRed})=>getButtonColor(disabled, $isRed)};
  cursor: ${({disabled})=>disabled ? "not-allowed":"pointer"};
`;

export const StyledImg = styled("img")`
  width: 20px;
  height: 20px;
`;

