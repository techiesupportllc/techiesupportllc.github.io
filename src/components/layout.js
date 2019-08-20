import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Animated, FadeAnimations } from "animated-styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import styled from "styled-components"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 0 1rem;
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
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 800, minHeight: "100vh" }}>
        <main style={{ flex: 1 }}>
          <Animated animation={{
          in: FadeAnimations.FadeIn,
          duration_in: 1
          }}>
            {children}
          </Animated>
        </main>
        <Footer />
      </div>
    </Page>
  )
}
