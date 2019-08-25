import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #f6993f;
  padding: 5px 15px 5px 15px;
  border: none;
  display: inline-block;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  margin: 1rem 0 0 0;
  border-radius: 5px;
`;

const CtaButton = props => (
  <StyledButton>
    {props.children}
  </StyledButton>
)

export default CtaButton
