import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import FeaturedImage from "../components/FeaturedImage"
import PageTitle from "../components/PageTitle"
import TagLine from "../components/TagLine"
import BlogForm from "../components/BlogForm"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  max-width: 1000px;
  padding: 0 1rem 0 1rem;
`;

const PostContainer = styled.div`
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

const DateReading = styled.p`
  color: #3d4852;
  font-size: 0.75rem;
`;

const Inner = styled.div`
  color: #F8FAFC;
  background: #3d4852;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 2rem 0;
`;

const End = styled.div`
  max-width: 1000px;
  padding: 0 1rem 0 1rem;
`;

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <Wrapper>
        <Section>
          <PageTitle>
            {post.frontmatter.title}
          </PageTitle>
          <DateReading>
            {"Published " + post.frontmatter.date} <b>•</b> {post.timeToRead + "-minute read"}
          </DateReading>
          <FeaturedImage title={post.frontmatter.title} featuredImage={featuredImgFluid} />
          <TagLine>
            {post.frontmatter.tagline}
          </TagLine>
          <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
          <BlogForm />
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
      timeToRead
    }
  }
`
