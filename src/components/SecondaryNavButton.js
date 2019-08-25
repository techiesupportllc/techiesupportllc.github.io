import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #dae1e7;
  padding: 5px 15px 5px 15px;
  border: none;
  display: inline-block;
  margin-left: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  border-radius: 5px;
`;

const SecondaryNavButton = props => (
  <StyledButton>
    {props.children}
  </StyledButton>
)

export default SecondaryNavButton
