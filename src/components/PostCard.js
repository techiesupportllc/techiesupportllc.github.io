import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const CardContainer = styled.div`
  min-width: 275px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: #ffffff;
  border-radius: 5px;
  padding: 1rem;
`;

const DateReading = styled.p`
  color: #3d4852;
  font-size: 0.75rem;
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const Excerpt = styled.p`
  font-size: 1.25rem;
`;

const Button = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #dae1e7;
  padding: 5px 15px 5px 15px;
  border: none;
  display: inline-block;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  border-radius: 5px;
`;

const PostCard = props => (
  <CardContainer>
      <Link to={props.link}>
          <Img fluid={props.featuredImage} style={{ marginBottom: "1rem", borderRadius: "5px", height: "275px" }} />
      </Link>
      <Title>
          {props.title}
      </Title>
      <DateReading>
        {"Published " + props.date} <b>•</b> {props.readingTime + "-minute read"}
      </DateReading>
      <Excerpt>
          {props.excerpt}
      </Excerpt>
      <Link to={props.link}>
          <Button>
              Read Post
          </Button>
      </Link>
  </CardContainer>
)

export default PostCard
