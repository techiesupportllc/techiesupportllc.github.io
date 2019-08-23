import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import FeaturedImage from "../components/FeaturedImage"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 0 1rem;
`;

const Section = styled.div`
  max-width: 800px;
  padding: 0 0 4rem 0;
`;

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
      <Wrapper>
        <Section>
          <FeaturedImage title={post.frontmatter.title} featuredImage={featuredImgFluid} />
          <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
        </Section>
      </Wrapper>
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
