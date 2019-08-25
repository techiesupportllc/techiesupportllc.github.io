import React from "react"
import styled from "styled-components"
import Paragraph from "./Paragraph"

const StyledDiv = styled.div`
 display: flex;
 padding: 1rem 0 2rem 0;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 1rem 0 1rem 1rem;
  flex-basis: 60%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const StyledButton = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #f6993f;
  padding: 1rem;
  border: none;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ContactForm = props => (
  <form
    id={props.id}
    action="https://formspree.io/help@techiesupport.co"
    method="post"
  >
    <Paragraph>
      <b>Drop us your email, and we'll get in touch to discuss your project.</b>
    </Paragraph>
    <StyledDiv>
      <StyledInput
        type="email"
        name="email"
        autocomplete="email"
        placeholder="your-email@business.com"
      />
      <StyledButton>
        Get In Touch
      </StyledButton>
    </StyledDiv>
  </form>
)

export default ContactForm
