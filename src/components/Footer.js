import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  text-align: center;
  background: #3d4852;
  color: #dae1e7;
  padding: 1.5rem 0 1.5rem 0;
  font-weight: bold;
  width: 100%;
  margin: 3rem 0 0 0;
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()} - Techie Support, LLC
  </StyledFooter>
)

export default Footer
