import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background: #F8FAFC;
`;

const Body = styled.div`
  min-height: 100vh;
`;

const Layout = props => (
  <Page>
    <SEO />
    <Header />
    <Body>
      {props.children}
    </Body>
    <Footer />
  </Page>
)

export default Layout
