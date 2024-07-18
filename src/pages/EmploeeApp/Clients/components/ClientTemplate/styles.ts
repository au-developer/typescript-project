import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
gap:30px ;
`;
export const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;

export const Description = styled.p`
font-size: 24px;
`;

export const ButtonControl = styled.div`
width: 400px;
`;