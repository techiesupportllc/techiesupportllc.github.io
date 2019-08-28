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
            Snow on a cactus?  That's different&mdash;just like us.
          </TagLine>
          <Paragraph>
            <b>Welcome to Techie Support.</b>  There's a reasonably good chance you won't regret visiting this website.
          </Paragraph>
          <Paragraph>
            <i>What in the world is this anyway?</i>
          </Paragraph>
          <Paragraph>
            A few years back, we were desperate for sales after our word of mouth work dried up.
          </Paragraph>
          <Paragraph>
            We offered "IT support", but that's an incredibly vague term.  And we would try to do just about anything you could throw at us.
          </Paragraph>
          <Paragraph>
            Servers?  We did 'em.  Desktops?  Did 'em.  Printers?  Yep.  Websites?  You bet.
          </Paragraph>
          <Paragraph>
            Once we hit on websites, we realized to our surprise that there are a boatload of absolutely awful websites out there.  We're talking the slowest, ugliest things to disgrace the Earth since the AMC Gremlin (who're we kidding, we're not even old enough to remember that).
          </Paragraph>
          <Paragraph>
            We saw the need, and we went for it full bore.  But it still wasn't enough.
          </Paragraph>
          <Paragraph>
            Businesses weren't interested in what we were selling, and frankly why should they be?  There are about 367,538 (give or take 753) freelancers out there who will churn out websites for pennies on the dollar.
          </Paragraph>
          <Paragraph>
            But we were "premium", whatever that means.
          </Paragraph>
          <Paragraph>
            <i>Who cares?</i>
          </Paragraph>
          <Paragraph>
            A website should serve exactly one purpose for your business&mdash;to improve your bottom line.  If it's not doing that, why spend money on a new one?
          </Paragraph>
          <Paragraph>
            The truth is, it's not enough to just <i>have</i> a website.  And guess what, it's not enough for it to <i>look good</i> either.
          </Paragraph>
          <Paragraph>
            It isn't even enough for it to load fast or be "SEO optimized" or any of that nonsense.
          </Paragraph>
          <Paragraph>
            None of that stuff matters, because nobody's going to see it anyway.
          </Paragraph>
          <Paragraph>
            At this point, you're probably shaking your head and wondering what kind of web development company would sit here and tell you <i>not</i> to invest in a new website.  To be fair though, we did warn you&mdash;we're radically different.
          </Paragraph>
          <Paragraph>
            We don't just churn out websites.
          </Paragraph>
          <Paragraph>
            We build, host and maintain your new JAMstack website, couple it with a solid content strategy (because ultimately, content is king), and combine the two into <b>a juggernaut of marketing power for your business</b>.
          </Paragraph>
          <Paragraph>
            Ok, that <i>might</i> be overselling it a bit, but the key takeaway for you is this:
          </Paragraph>
          <Paragraph
            id="get-in-touch"
          >
            We don't <i>just</i> build websites.  We build marketing engines that just so happen to include websites.
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
              Web developers, scholars, poets&mdash;and all around friendly folks.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              What is JAMstack?
            </SecondHeading>
            <SecondParagraph>
              Simply put, it's the future of web development.  It's faster, it's more secure and it's got some awesome features like websites that work offline (seriously, try it; you can totally read our blog while you have no internet connection).
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
              It's hard to answer a question like this without just sounding self-serving.  But ultimately, the truth is that we holistically combine your website and content with the goal of producing long-term gains for your business.  It's a simple concept but one that is surprisingly hard to pull off.
            </SecondParagraph>
          </SecondOuter>
          <SecondOuter>
            <SecondHeading>
              How much do you cost?
            </SecondHeading>
            <SecondParagraph>
              Expect to pay at least $7000 per month in most cases.  No possible way you can afford that?  Head on over to <Link to="/blog/">our blog</Link> for some awesome free tips.
            </SecondParagraph>
          </SecondOuter>
        </SecondSubWrapper>
        <NewContactForm />
      </SecondSection>
    </SecondWrapper>
  </Layout>
)
