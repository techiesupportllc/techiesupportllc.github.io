import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import styled from "styled-components"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  background: #F8FAFC;
`;

const Body = styled.div`
  /*display: flex;*/
  /*flex-direction: column;*/
  /*max-width: 800px;*/
  min-height: 100vh;
  /*padding: 0 1rem 0 1rem;*/
`;

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Page>
      <SEO />
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </Page>
  )
}
