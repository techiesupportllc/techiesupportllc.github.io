import React from "react"
import { Link } from "gatsby"
import PrimaryNavButton from "./PrimaryNavButton"
import SecondaryNavButton from "./SecondaryNavButton"

const NavButtons = props => (
  <div>
    <Link to="/blog/">
      <SecondaryNavButton>
        Blog
      </SecondaryNavButton>
    </Link>
    <Link to="/">
      <PrimaryNavButton>
        Get Started
      </PrimaryNavButton>
    </Link>
  </div>
)

export default NavButtons
