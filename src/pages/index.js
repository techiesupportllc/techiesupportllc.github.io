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
            Radically different web development
          </PageTitle>
          <TagLine>
            We'll build, host and maintain your website for $297 per month.
          </TagLine>
          <NewContactForm />
          <Paragraph>
            Let's face it, there are <i>a lot</i> of awful websites out there.  Maybe they fell out of the ugly tree and hit every branch on the way down.  Or maybe they're just slower than molasses.
          </Paragraph>
          <Paragraph>
            We've noticed this and see an incredible opportunity to help businesses like yours.
          </Paragraph>
          <Paragraph>
            <i>But what makes us different?</i>
          </Paragraph>
          <Paragraph>
            We build every website with Gatsby, a JAMstack framework.
          </Paragraph>
          <Paragraph>
            We don't expect you to care how the sausage is made.  The point is that JAMstack is the future of the web.  It's lean, fast and secure.
          </Paragraph>
          <Paragraph>
            Don't just take our word for it.  Big names&mdash;including <i>Airbnb</i>, <i>Nike</i> and <i>PayPal</i>&mdash;use JAMstack to power their websites.
          </Paragraph>
          <Paragraph>
            Our goal is to make this awesome technology available to your business at an affordable price.
          </Paragraph>
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
              A dedicated team of web developers who want to bring the benefits of JAMstack to your business.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              What is JAMstack?
            </SecondHeading>
            <SecondParagraph>
              Simply put, it's the future of the web.  It's faster and more secure than traditional platforms like WordPress.  To top it off, it gives your website awesome features like the ability to work offline and be installed on mobile devices as if it's an app.
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
              When were you founded?
            </SecondHeading>
            <SecondParagraph>
              Way back in 2013.  It was a simpler time.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              Why work with you?
            </SecondHeading>
            <SecondParagraph>
              It's hard to answer a question like this without sounding self-serving.  The truth is that what we do&mdash;building websites&mdash;isn't unique at all.  However, the way we do it definitely is.  But we don't just do it this way for the sake of being different.  We do it this way because we believe it's truly better for you and your business.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              How much do you cost?
            </SecondHeading>
            <SecondParagraph>
              Just $297 per month.  That includes quick turnaround, unlimited revisions, fast hosting and ongoing maintenance.  Best of all, there are no hidden fees, no upcharges and no headaches.
            </SecondParagraph>
          </SecondOuter>
        </SecondSubWrapper>
        <NewContactForm />
      </SecondSection>
    </SecondWrapper>
  </Layout>
)
