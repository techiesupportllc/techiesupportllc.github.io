import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"

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
      {children}
    </div>
  )
}
