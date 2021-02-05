import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BlogIndex,
  BrandAuthority,
  Contact,
  FeatureSection,
  Hero,
  Portfolio,
} from "../components/tailwind"

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Kendy Nguyen" />
    <Hero />
    {/* <FeatureSection /> */}
    {/* <BrandAuthority /> */}
    <Portfolio id="portfolio" />
    <BlogIndex />
    <Contact />
  </Layout>
)

export default IndexPage
