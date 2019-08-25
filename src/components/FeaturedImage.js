import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const FeaturedImage = props => (
  <div>
    <Img fluid={props.featuredImage} alt={props.title} style={{ borderRadius: "5px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} />
  </div>
)

export default FeaturedImage
