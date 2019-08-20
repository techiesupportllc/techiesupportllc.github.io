import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const CardContainer = styled.div`
    min-width: 275;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background: #fff;
    border-radius: 5px;
`;

const Date = styled.p`

`;

const Title = styled.h3`
    font-size: 2rem;
    font-weight: lighter;
    padding: 0 0 1rem 0;
`;

const ReadingTime = styled.p`

`;

const Excerpt = styled.p`
    font-size: 1.25rem;
`;

const Button = styled.button`

`;

const PostCard = props => (
    <CardContainer>
        <Link to={props.link}>
            <Img fluid={props.featuredImage} style={{ marginBottom: "1.5rem", borderRadius: "5px", height: "275" }} />
        </Link>
        <Date>
            {props.date}
        </Date>
        <Title>
            {props.title}
        </Title>
        <ReadingTime>
            {props.readingTime + " minute read"}
        </ReadingTime>
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