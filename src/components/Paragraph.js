import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  font-size: 1.25rem;
`;

const Paragraph = props => (
  <StyledParagraph>
    {props.children}
  </StyledParagraph>
)

export default Paragraph
