import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"

export default () => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      <h1>Radically different<br /> web development</h1>
      <Hero />
      <p style={{ marginTop: "1.5rem" }}>You've probably never seen <b>snow on a cactus</b>.</p>
      <h3>You've <i>definitely</i> never seen our special brand of web development.</h3>
    </div>
  </Layout>
)
