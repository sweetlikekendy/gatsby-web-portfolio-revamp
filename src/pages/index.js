import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TailwindHero from "../components/tailwind/tailwind-hero"
import Projects from "../components/tailwind/tailwind-projects"
import BrandAuthority from "../components/tailwind/tailwind-brand-authority"
import Contact from "../components/tailwind/tailwind-contact"
import FeatureSection from "../components/tailwind/tailwind-feature-section"

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Home" />
    <TailwindHero />
    {/* <FeatureSection /> */}
    {/* <BrandAuthority /> */}
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
