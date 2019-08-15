import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <>
      <SEO />
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1200, padding: "1rem", minHeight: "100vh" }}>
        <Header />
        <main style={{ marginTop: "4rem", flex: 1 }}>
          <Animated animation={{
          in: FadeAnimations.FadeIn,
          duration_in: 1
          }}>
            {children}
          </Animated>
        </main>
        <Footer />
      </div>
    </>
  )
}
