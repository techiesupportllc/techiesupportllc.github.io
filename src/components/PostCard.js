import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const CardContainer = styled.div`
    min-width: 275px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background: #fff;
    border-radius: 5px;
    padding: 1rem;
`;

const DateReading = styled.p`
  color: #3d4852;
  font-size: 0.9rem;
`;

const Title = styled.h3`
    font-size: 2rem;
    padding: 0 0 1rem 0;
    margin: 0 0 -0.5rem 0;
`;

const Excerpt = styled.p`
    font-size: 1.25rem;
    padding: 0 0 1rem 0;
`;

const Button = styled.button`
  border: none;
  border-bottom: 4px solid #3d4852;
  font-size: 1.25rem;
  background-color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  color: #3d4852;
  display: inline-block;
  cursor: pointer;
  margin: 0 0 1rem 0;
`;

const PostCard = props => (
    <CardContainer>
        <Link to={props.link}>
            <Img fluid={props.featuredImage} style={{ marginBottom: "1.5rem", borderRadius: "5px", height: "275px" }} />
        </Link>
        <Title>
            {props.title}
        </Title>
        <DateReading>
            {props.date} &mdash; {props.readingTime + " minute read"}
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
