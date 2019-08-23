import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import styled from "styled-components"

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 0 6rem 0;
`;

const FirstSection = styled.div`
  max-width: 800px;
  padding: 0 1rem 0 1rem;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
`;

const SubHeading = styled.h3`
  font-size: 2rem;
  font-weight: lighter;
  padding: 1rem 0 1rem 0;
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

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f6993f;
  padding: 4rem 0 4rem 0;
`;

const SecondSection = styled.div`
  max-width: 800px;
  color: #3d4852;
  width: 100%;
  padding: 0 1rem 0 1rem;
`;

const SecondaryHeading = styled.h3`
  font-size: 2rem;
`;

const SecondSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SecondOuter = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondInner = styled.div`

`;

const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #3d4852;
  padding: 4rem 0 6rem 0;
`;

const ThirdSection = styled.div`
  max-width: 800px;
  color: #fff;
  width: 100%;
  padding: 0 1rem 0 1rem;
`;

const ThirdSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThirdOuter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid #8795A1;
  margin: 1rem 0 0 0;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ThirdHeading = styled.h3`
  flex: 1;
`;

const ThirdParagraph = styled.p`
  font-size: 1.25rem;
  padding: 1.5rem 0 0 0;
  color: #FFF5EB;
  flex: 1;
`;

const ButtonOuter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 0 8rem 0 0;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export default () => (
  <Layout>
      <FirstWrapper>
        <FirstSection>
          <MainHeading>Radically different web development</MainHeading>
          <Hero />
          <SubHeading>Ever seen snow on a cactus?<br/>It's unquestionably unforgettable&mdash;just like us.</SubHeading>
          <Paragraph><b>We'll build, host and maintain</b> your JAMstack website or web app for one low monthly cost.</Paragraph>
          <Paragraph>We're <i>light years</i> more affordable than hiring a full-time web developer.</Paragraph>
          <Paragraph>To put it in context:</Paragraph>
          <Paragraph>Hire one full-time developer <i>at minimum wage</i>, and you're still paying more than $1200 per month in wages, taxes and benefits.</Paragraph>
          <Paragraph>But wait a minute.  Have you ever tried to find a skilled developer willing to work for minimum wage?  <i>Not possible</i>.</Paragraph>
          <Paragraph>With us, it's <i>simple</i>.  You pay one flat rate of $999 per month.</Paragraph>
          <Paragraph>Our highly skilled team builds your project with the latest web technology, deploys it to the fastest web hosting and keeps it well maintained -- all while you save time and money.</Paragraph>
          <Paragraph><b>It's a win-win.</b></Paragraph>
          <a href="mailto:help@techiesupport.co?subject=Let's get started!&body=Thanks for reaching out!  Tell us about your next project so we can make sure we'll be a good fit. :)"><CTAButton>Get Started</CTAButton></a>
        </FirstSection>
    </FirstWrapper>
    <SecondWrapper>
      <SecondSection>
        <SecondaryHeading>What's included</SecondaryHeading>
        <SecondSubWrapper>
          <SecondOuter>
            <SecondInner>
              <h3>Proven technology</h3>
              <Paragraph>Fast, secure and scalable</Paragraph>
            </SecondInner>
            <SecondInner>
              <h3>Exceptional people</h3>
              <Paragraph>A detail-oriented team who cares</Paragraph>
            </SecondInner>
          </SecondOuter>
          <SecondOuter>
            <SecondInner>
              <h3>Ongoing maintenance</h3>
              <Paragraph>Keeping things running smoothly</Paragraph>
            </SecondInner>
            <SecondInner>
              <h3>Modern JAMstack</h3>
              <Paragraph>The future of the web</Paragraph>
            </SecondInner>
          </SecondOuter>
        </SecondSubWrapper>
      </SecondSection>
    </SecondWrapper>
    <ThirdWrapper>
      <ThirdSection>
        <SecondaryHeading>
          Frequently asked questions
        </SecondaryHeading>
        <ThirdSubWrapper>
          <ThirdOuter>
            <ThirdHeading>
              Who are you?
            </ThirdHeading>
            <ThirdParagraph>
              Web developers who aren't happy with the way many agencies build websites and web apps.
            </ThirdParagraph>
          </ThirdOuter>
          <ThirdOuter>
            <ThirdHeading>
              What is JAMstack?
            </ThirdHeading>
            <ThirdParagraph>
              A modern way of building websites and web apps that is faster and more secure than traditional methods.  It unlocks a world of possibilities including web apps that can be installed on mobile devices and work offline.
            </ThirdParagraph>
          </ThirdOuter>
          <ThirdOuter>
            <ThirdHeading>
              Where is your headquarters?
            </ThirdHeading>
            <ThirdParagraph>
              ☀️ Phoenix
            </ThirdParagraph>
          </ThirdOuter>
          <ThirdOuter>
            <ThirdHeading>
              When will my project be finished?
            </ThirdHeading>
            <ThirdParagraph>
              The exact time frame varies.  Most are completed within three to six months, depending upon complexity.
            </ThirdParagraph>
          </ThirdOuter>
          <ThirdOuter>
            <ThirdHeading>
              Why work with you?
            </ThirdHeading>
            <ThirdParagraph>
              Many web development agencies take the same old approach with every website they build:  Slap up a WordPress install on a slow shared server and use a bloated page builder plugin to design the site.<br /><br />We think you deserve better than that.
            </ThirdParagraph>
          </ThirdOuter>
          <ThirdOuter>
            <ThirdHeading>
              How can I get started?
            </ThirdHeading>
            <ThirdParagraph>
              Click the orange button. 🙂
            </ThirdParagraph>
          </ThirdOuter>
          <ButtonOuter>
            <CTAButton>
              Get Started
            </CTAButton>
          </ButtonOuter>
        </ThirdSubWrapper>
      </ThirdSection>
    </ThirdWrapper>
  </Layout>
)
