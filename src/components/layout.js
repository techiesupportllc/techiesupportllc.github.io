import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Animated, FadeAnimations } from "animated-styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
    </div>
  )
}
