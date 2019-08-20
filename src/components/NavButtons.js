import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavButtonDiv = styled.div`

`;

const PrimaryNavButton = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #f6993f;
  padding: 5px 15px 5px 15px;
  border: none;
  display: inline-block;
  margin-left: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;

const SecondaryNavButton = styled.button`
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

const NavButtons = props => (
  <NavButtonDiv>
    <Link to="/blog/">
      <SecondaryNavButton>Blog</SecondaryNavButton>
    </Link>
    <a href="mailto:help@techiesupport.co?subject=Let's get started!&body=Thanks for reaching out!  What does your next project look like?  Let us know so we can make sure we'll be a good fit. :)">
      <PrimaryNavButton>Get Started</PrimaryNavButton>
    </a>
  </NavButtonDiv>
)

export default NavButtons
