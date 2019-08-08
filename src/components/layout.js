import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Animated, FadeAnimations } from "animated-styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
    <div style={{ display: "flex", flexDirection: "column", margin: "3rem auto", maxWidth: 1200, padding: "0 1rem" }}>
      <Header />
      <Animated animation={{
        in: FadeAnimations.FadeIn,
        duration_in: 1
      }}>
      <main style={{ marginTop: "4rem" }}>
        {children}
      </main>
      </Animated>
      <Footer />
    </div>
  )
}
