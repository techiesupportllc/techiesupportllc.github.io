import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"
import styled from "styled-components"
import NavButtons from "./NavButtons"

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  margin: 1rem 0 0 0;
  padding: 0 1rem 0 1rem;
  img {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = props => (
  <HeaderDiv>
    <Link to="/">
      <img src={Logo} height="40" />
    </Link>
    <NavButtons />
  </HeaderDiv>
)

export default Header
