import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  text-align: center;
  background: #8795A1;
  color: #F8FAFC;
  padding: 1.5rem 0 1.5rem 0;
  font-weight: bold;
  width: 100%;
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()} • Techie Support, LLC<br />Built with ❤️ in Phoenix
  </StyledFooter>
)

export default Footer
