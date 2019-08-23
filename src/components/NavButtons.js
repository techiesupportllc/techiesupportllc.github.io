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
  margin: 0 0 0 1rem;
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
    <Link to="/">
      <SecondaryNavButton>
        Home
      </SecondaryNavButton>
    </Link>
    <Link to="/blog/">
      <SecondaryNavButton>
        Blog
      </SecondaryNavButton>
    </Link>
    <SecondaryNavButton
      className="snipcart-checkout"
    >
      Cart
    </SecondaryNavButton>
    <PrimaryNavButton
      className="snipcart-add-item"
      data-item-name="Web Development Subscription"
      data-item-description="We'll build, host and maintain your JAMstack website or web app for one low monthly cost."
      data-item-id="web-development-subscription"
      data-item-url="/"
      data-item-price="999.00"
      data-item-payment-interval="Month"
      data-item-payment-interval-count="1"
      data-item-taxable="false"
      data-item-cancellation-action="CancelAtCurrentCycleEnd"
      data-item-pausing-action="KeepActiveUntilEndOfBillingCycle"
    >
      Sign Up
    </PrimaryNavButton>
  </NavButtonDiv>
)

export default NavButtons
