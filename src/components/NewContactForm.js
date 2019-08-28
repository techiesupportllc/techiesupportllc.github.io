import React from "react"
import styled from "styled-components"
import axios from "axios"
import { Formik } from "formik"
import * as Yup from "yup"
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

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-USER-TOKEN": `${process.env.GATSBY_MAILBLAST_TOKEN}`,
    "X-USER-EMAIL": `${process.env.GATSBY_MAILBLAST_EMAIL}`
  }
}

const NewContactForm = () => (
  <Formik
    initialValues={{ email: "" }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        axios.post("https://api.mailblast.io/v1/lists/4156af75-cfc0-44e8-8f2e-e0c19088a52a/subscribers", {
          data: {
            attributes: {
              email: values["email"],
            }
          }
        }, config);
        alert("Thanks for dropping us your email!  We'll get in touch soon to discuss your business.");
        setSubmitting(false);
        resetForm();
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required(""),
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      } = props;
      return (
        <form
          onSubmit={handleSubmit}
        >
          <Paragraph>
            <b>Drop us your email, and we'll get in touch to discuss your business.</b>
          </Paragraph>
          <StyledDiv>
            <StyledInput
              type="email"
              name="email"
              autocomplete="email"
              placeholder="your-email@your-business.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? "text-input error" : "text-input"
              }
            />
            <StyledButton
              type="submit"
              disabled={isSubmitting}
            >
              Get In Touch
            </StyledButton>
          </StyledDiv>
        </form>
      );
    }}
  </Formik>
)

export default NewContactForm
