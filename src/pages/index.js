import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import styled from "styled-components"

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 0 4rem 0;
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

const CTAButtonPrimary = styled.button`
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

const SecondaryHeading = styled.h3`
  font-size: 2rem;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #3d4852;
  padding: 4rem 0 4rem 0;
`;

const SecondSection = styled.div`
  max-width: 800px;
  color: #F8FAFC;
  width: 100%;
  padding: 0 1rem 0 1rem;
`;

const SecondSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondOuter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid #606F7B;
  margin: 1rem 0 0 0;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SecondHeading = styled.h3`
  flex: 1;
`;

const SecondParagraph = styled.p`
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
  padding: 1rem 8rem 0 0;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const CTAButtonSecondary = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #dae1e7;
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

const GetStartedForm = styled.form`

`;

const GetStartedDiv = styled.div`
 display: flex;
 padding: 1rem 0 1rem 0;
`;

const GetStartedAltDiv = styled.div`
  display: flex;
  padding: 1rem 0 1rem 0;
  justify-content: center;
`;

const GetStartedParagraphDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const GetStartedInput = styled.input`
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 1rem 0 1rem 1rem;
  flex-basis: 60%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const GetStartedButton = styled.button`
  color: #3d4852;
  text-transform: uppercase;
  text-decoration: none;
  background: #f6993f;
  padding: 1rem;
  border: none;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export default () => (
  <Layout>
      <FirstWrapper>
        <FirstSection>
          <MainHeading>
            Radically different web development
          </MainHeading>
          <Hero />
          <SubHeading>
            Ever seen snow on a cactus?<br/>It's unquestionably unforgettable&mdash;just like us.
          </SubHeading>
          <Paragraph>
            <b>We'll build, host and maintain</b> your JAMstack website or web app for one low monthly cost.
          </Paragraph>
          <Paragraph>
            We're <i>light years</i> more affordable than hiring a full-time web developer.
          </Paragraph>
          <Paragraph>
            To put it in context:
          </Paragraph>
          <Paragraph>
            Hire one full-time developer <i>at minimum wage</i>, and you're still paying more than $1200 per month in wages, taxes and benefits.
          </Paragraph>
          <Paragraph>
            But wait a minute.  Have you ever tried to find a skilled developer willing to work for minimum wage?  <i>Not possible</i>.
          </Paragraph>
          <Paragraph>
            With us, it's <i>simple</i>.  You pay one flat rate of $999 per month.
          </Paragraph>
          <Paragraph>
            Our highly skilled team builds your project with the latest web technology, deploys it to the fastest web hosting and keeps it well maintained&mdash;all while you save time and money.
          </Paragraph>
          <Paragraph>
            <b>It's a win-win.</b>
          </Paragraph>
          <GetStartedForm>
            <GetStartedDiv>
              <GetStartedInput
                type="email"
                placeholder="i-need-a-website@business.com"
                autocomplete="email"
              />
              <GetStartedButton
                type="submit"
              >
                Get In Touch
              </GetStartedButton>
            </GetStartedDiv>
            <p>
              <i>We won't spam you or sell your information to third parties.</i>
            </p>
          </GetStartedForm>
        </FirstSection>
    </FirstWrapper>
    <SecondWrapper>
      <SecondSection>
        <SecondaryHeading>
          Frequently asked questions
        </SecondaryHeading>
        <SecondSubWrapper>
          <SecondOuter>
            <SecondHeading>
              Who are you?
            </SecondHeading>
            <SecondParagraph>
              Web developers who aren't happy with the agency options available to business owners.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              What is JAMstack?
            </SecondHeading>
            <SecondParagraph>
              A modern way of building websites and web apps that makes them faster and more secure than traditional methods.  It unlocks a world of possibilities including web apps that can be installed on mobile devices and work offline.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              Where is your headquarters?
            </SecondHeading>
            <SecondParagraph>
              ☀️ Phoenix
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              When will my project be finished?
            </SecondHeading>
            <SecondParagraph>
              The exact time frame varies depending upon complexity.  Most are completed within three to six months.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              Why work with you?
            </SecondHeading>
            <SecondParagraph>
              Many web development agencies take the same old approach with every website they build:  Slap a WordPress install on a slow shared server and use a bloated page builder plugin to design the site.  And they often charge a small fortune to do so.  To top it off, sites are often left unmaintained and insecure.  You pay good money and end up with a subpar end result.<br /><br />We think you deserve better than that.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              How can I get started?
            </SecondHeading>
            <SecondParagraph>
              Enter your email address and click the orange button. 🙂
            </SecondParagraph>
          </SecondOuter>
          <GetStartedForm>
            <GetStartedAltDiv>
              <GetStartedInput
                type="email"
                placeholder="i-need-a-website@business.com"
                autocomplete="email"
              />
              <GetStartedButton
                type="submit"
              >
                Get In Touch
              </GetStartedButton>
            </GetStartedAltDiv>
            <GetStartedParagraphDiv>
              <p>
                <i>We won't spam you or sell your information to third parties.</i>
              </p>
            </GetStartedParagraphDiv>
          </GetStartedForm>
        </SecondSubWrapper>
      </SecondSection>
    </SecondWrapper>
  </Layout>
)
