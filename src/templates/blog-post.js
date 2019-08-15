import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <Img fluid={featuredImgFluid} style={{ marginBottom: "1.5rem", borderRadius: "5px" }} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
