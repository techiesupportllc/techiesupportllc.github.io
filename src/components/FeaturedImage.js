import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  padding: 0 0 2rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const FeaturedImage = props => (
  <ImageWrapper>
    <Title>{props.title}</Title>
    <Img fluid={props.featuredImage} alt={props.title} style={{ borderRadius: "5px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} />
  </ImageWrapper>
)

export default FeaturedImage
