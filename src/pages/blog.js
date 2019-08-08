import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SimpleCard from "../components/SimpleCard"

export default ({ data }) => {

  return (
    <Layout>
      <h1>Blog</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          <SimpleCard featuredImage={node.frontmatter.featuredImage.childImageSharp.fluid} date={node.frontmatter.date} title={node.frontmatter.title} readingTime={node.timeToRead} excerpt={node.excerpt} link={node.fields.slug} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
