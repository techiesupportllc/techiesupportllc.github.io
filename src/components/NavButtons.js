import React from "react"
import { Link } from "gatsby"
import PrimaryNavButton from "./PrimaryNavButton"
import SecondaryNavButton from "./SecondaryNavButton"

const NavButtons = props => (
  <div>
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
    <Link to="/#get-in-touch">
      <PrimaryNavButton>
        Get In Touch
      </PrimaryNavButton>
    </Link>
  </div>
)

export default NavButtons
