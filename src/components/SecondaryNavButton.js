import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  color: #606F7B;
  background: none;
  font-weight: bold;
  text-decoration: none;
  border: none;
  display: inline-block;
  margin: 0 2rem 0 0;
  cursor: pointer;
`;

const SecondaryNavButton = props => (
  <StyledButton>
    {props.children}
  </StyledButton>
)

export default SecondaryNavButton
