import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import styled from "styled-components"

const MainHeading = styled.h1`
  font-size: 3rem;
`;

const SecondaryHeading = styled.h3`
  font-size: 2rem;
  font-weight: lighter;
  padding: 0 0 1rem 0;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
`;

const CTAButton = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #f6993f;
  padding: 5px 15px 5px 15px;
  border: none;
  display: inline-block;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  margin: 1rem 0 0 0;
  border-radius: 5px;
`;

export default () => (
  <Layout>
    <MainHeading>Radically different web development</MainHeading>
    <Hero />
    <SecondaryHeading>Ever seen snow on a cactus?<br/>It's unforgettable&mdash;just like us.</SecondaryHeading>
    <Paragraph><b>We'll build, host and maintain</b> your website or web app for one low monthly cost.</Paragraph>
    <Paragraph>We're <i>light years</i> more affordable than hiring a full-time web developer.</Paragraph>
    <Paragraph>To put it in context:</Paragraph>
    <Paragraph>Hire one full-time developer <i>at minimum wage</i>, and you're still paying more than $1200 per month in wages, taxes and benefits.</Paragraph>
    <Paragraph>But wait a minute.  Have you ever tried to find a skilled developer willing to work for minimum wage?  <i>Not possible</i>.</Paragraph>
    <Paragraph>With us, it's <i>simple</i>.  You pay one flat rate of $999 per month.</Paragraph>
    <Paragraph>Our highly skilled team builds your project with the latest web technology, deploys it to the fastest web hosting and keeps it well maintained -- all while you save time and money.</Paragraph>
    <Paragraph><b>It's a win-win.</b></Paragraph>
    <a href="mailto:help@techiesupport.co?subject=Let's get started!&body=Thanks for reaching out!  Tell us about your next project so we can make sure we'll be a good fit. :)"><CTAButton>Get Started</CTAButton></a>
  </Layout>
)
