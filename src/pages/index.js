import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PageTitle from "../components/PageTitle"
import TagLine from "../components/TagLine"
import Paragraph from "../components/Paragraph"
import ContactForm from "../components/ContactForm"

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 0 2rem 0;
`;

const FirstSection = styled.div`
  max-width: 800px;
  padding: 0 1rem 0 1rem;
`;

const SecondaryHeading = styled.h3`
  font-size: 2rem;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #3d4852;
  padding: 2rem 0 2rem 0;
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
  padding: 1rem 0 2rem 0;
`;

const SecondOuter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid #606F7B;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-content: center;
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
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export default () => (
  <Layout>
      <FirstWrapper>
        <FirstSection>
          <PageTitle>
            Radically different web development
          </PageTitle>
          <Hero />
          <TagLine>
            Snow on a cactus?  Different&mdash;just like us.
          </TagLine>
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
            Our talented team builds your project with the latest web technology, deploys it to the fastest web hosting and keeps it well maintained&mdash;while you <i>save time and money</i>.  It's a win-win.
          </Paragraph>
          <ContactForm
            id="get-in-touch"
          />
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
              Web developers who want to bring the benefits of JAMstack to your business.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              What is JAMstack?
            </SecondHeading>
            <SecondParagraph>
              A better way of building your website or web app to make it faster and more secure than traditional methods.
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
              It varies between projects depending upon their complexity.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              Why work with you?
            </SecondHeading>
            <SecondParagraph>
              The norm is to slap WordPress on a slow shared server and use a bloated page builder plugin to design your site&mdash;leaving it insecure, unmaintained and sluggish.  You end up paying good money for a subpar result.<br /><br />We think you deserve better than that.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              How are you so affordable?
            </SecondHeading>
            <SecondParagraph>
              By leveraging the power of JAMstack while building, hosting and maintaining your site in one comprehensive package, we're able to keep our overhead low.
            </SecondParagraph>
          </SecondOuter>
        </SecondSubWrapper>
        <ContactForm />
      </SecondSection>
    </SecondWrapper>
  </Layout>
)
