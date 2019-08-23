import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from "../components/PostCard"
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

const MainHeading = styled.h1`
  font-size: 3rem;
`;

export default ({ data }) => {

  return (
    <Layout>
      <Wrapper>
        <Section>
          <MainHeading>Blog</MainHeading>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} style={{ marginBottom: "3rem" }}>
              <PostCard featuredImage={node.frontmatter.featuredImage.childImageSharp.fluid} date={node.frontmatter.date} title={node.frontmatter.title} readingTime={node.timeToRead} excerpt={node.excerpt} link={node.fields.slug} />
            </div>
          ))}
        </Section>
      </Wrapper>
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
