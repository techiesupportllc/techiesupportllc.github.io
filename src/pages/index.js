import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PageTitle from "../components/PageTitle"
import TagLine from "../components/TagLine"
import Paragraph from "../components/Paragraph"
import NewContactForm from "../components/NewContactForm"

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 0 2rem 0;
`;

const FirstSection = styled.div`
  max-width: 1000px;
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
  max-width: 1000px;
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
            Unlimited web development for a flat monthly price
          </PageTitle>
          <TagLine>
            Techie Support is a subscription-based web development outsourcing service.
          </TagLine>
          <Paragraph>
            You pay $297 per month and receive quick turnaround and unlimited revisions.  No hidden fees and no headaches.  All with a 14-day money-back guarantee.
          </Paragraph>
          <NewContactForm />
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
              A team of expert web developers dedicated to meeting your development needs to the highest standards.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              What can you do?
            </SecondHeading>
            <SecondParagraph>
              When it comes to web development, just about anything.  We can help you integrate new features into your existing website or even build you a brand new one.<br /><br />A good way to check whether your request is doable or not is to ask yourself:  <i>Can I reasonably explain what I want in one email?</i><br /><br />If the answer is yes, chances are we can do it.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              Where is your headquarters?
            </SecondHeading>
            <SecondParagraph>
              ☀️ Phoenix.  Fun fact:  The sun shines here an average of 299 days per year.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              When will you have my development done?
            </SecondHeading>
            <SecondParagraph>
              The exact time frame varies between development tasks.  Smaller tasks like integrating new features into your existing website usually only take a few days.  Larger tasks like building you a brand new website usually take a few weeks.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              Why work with you?
            </SecondHeading>
            <SecondParagraph>
              We deliver high-quality web development quickly and affordably without the headaches so that you're free to focus on what matters&mdash;your business.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              How much do you cost?
            </SecondHeading>
            <SecondParagraph>
              Just $297 per month.
            </SecondParagraph>
          </SecondOuter>
        </SecondSubWrapper>
        <NewContactForm />
      </SecondSection>
    </SecondWrapper>
  </Layout>
)
