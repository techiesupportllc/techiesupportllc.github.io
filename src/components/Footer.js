import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Brands from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem;
  font-weight: bold;
  width: 100%;
  font-size: 0.75rem;
  a {
    color: inherit;
  }
`;

const Footer = () => (
  <StyledFooter>
    <a ariaLabel="Facebook" href="https://facebook.com/techiesupport">
      <FontAwesomeIcon icon={Brands.faFacebook} size="2x" style={{ margin: "0 1rem 0 0" }} title="Facebook" />
    </a>
    <a ariaLabel="Instagram" href="https://instagram.com/techiesupport">
      <FontAwesomeIcon icon={Brands.faInstagram} size="2x" style={{ margin: "0 0.5rem 0 0" }} title="Instagram" />
    </a>
    <a ariaLabel="LinkedIn" href="https://linkedin.com/company/techiesupport">
      <FontAwesomeIcon icon={Brands.faLinkedin} size="2x" style={{ margin: "0 0 0 0.5rem" }} title="LinkedIn" />
    </a>
    <a ariaLabel="Twitter" href="https://twitter.com/techiesupportco">
      <FontAwesomeIcon icon={Brands.faTwitter} size="2x" style={{ margin: "0 0 0 1rem" }} title="Twitter" />
    </a>
    <br />© {new Date().getFullYear()} • Techie Support, LLC<br />Built with ❤️ in Phoenix
  </StyledFooter>
)

export default Footer
