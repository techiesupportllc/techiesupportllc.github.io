import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h1`
  font-size: 3rem;
`;

const PageTitle = props => (
  <StyledHeading>
    {props.children}
  </StyledHeading>
)

export default PageTitle
