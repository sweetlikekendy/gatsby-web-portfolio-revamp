import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/tailwind"
import { Portfolio } from "../components/tailwind"
import { BrandAuthority } from "../components/tailwind"
import { Contact } from "../components/tailwind"
import { FeatureSection } from "../components/tailwind"

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Kendy Nguyen" />
    <Hero />
    {/* <FeatureSection /> */}
    {/* <BrandAuthority /> */}
    <Portfolio id="portfolio" />
    <Contact />
  </Layout>
)

export default IndexPage
