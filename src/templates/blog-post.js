import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import FeaturedImage from "../components/FeaturedImage"
import styled from "styled-components"

const PostContainer = styled.div`
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <FeaturedImage title={post.frontmatter.title} featuredImage={featuredImgFluid} />
      <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
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
