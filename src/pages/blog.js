import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import PageTitle from "../components/PageTitle"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2rem 0;
`;

const Section = styled.div`
  max-width: 1000px;
  padding: 0 1rem 0 1rem;
  width: 100%;
`;

export default ({ data }) => {

  return (
    <Layout>
      <Wrapper>
        <Section>
          <PageTitle>
            Blog
          </PageTitle>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} style={{ marginBottom: "3rem" }}>
              <PostCard featuredImage={node.frontmatter.featuredImage.childImageSharp.fluid} date={node.frontmatter.date} title={node.frontmatter.title} readingTime={node.timeToRead} excerpt={node.frontmatter.tagline} link={node.fields.slug} />
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
            tagline
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
          timeToRead
        }
      }
    }
  }
`
