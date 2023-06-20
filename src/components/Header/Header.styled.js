import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderEl = styled.header`
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);

  >nav {
    display: flex;
    gap: 32px;
    justify-content: center;
  }
`

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 36px;
  padding-top: 18px;
  padding-bottom: 18px;
  

  &.active {
    color: #d58d29;
  }
`;