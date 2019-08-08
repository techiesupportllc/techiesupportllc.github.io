import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

export default function GroupedButtons() {
  return (
    <ButtonGroup>
      <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
        <Button>
          Home
        </Button>
      </Link>
      <Link to="/blog/" style={{ textShadow: "none", backgroundImage: "none" }}>
        <Button>
          Blog
        </Button>
      </Link>
    </ButtonGroup>
  );
}
