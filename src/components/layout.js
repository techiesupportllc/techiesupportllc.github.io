import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Animated, FadeAnimations } from "animated-styled-components"
import { rhythm } from "../utils/typography"
import Footer from "../components/Footer"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
    <div style={{ margin: `0 auto`, maxWidth: 700, padding: `${rhythm(2)}` }}>
      <h3>{data.site.siteMetadata.title}</h3>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
      </ul>
      <Animated animation={{
        in: FadeAnimations.FadeIn,
        duration_in: 1
      }}>
        {children}
      </Animated>
      <Footer />
    </div>
  )
}
