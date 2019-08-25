import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h3`
  font-size: 2rem;
  font-weight: lighter;
  padding: 1rem 0 1rem 0;
`;

const TagLine = props => (
  <StyledHeading>
    {props.children}
  </StyledHeading>
)

export default TagLine
