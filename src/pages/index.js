import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DecorativeHorizontalBar from "../components/decorative-horizontal-bar"
import Hero from "../components/hero"
import ProjectsSection from "../components/projects-section"
import ContactSection from "../components/contact-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <DecorativeHorizontalBar />
    <Hero />
    <ProjectsSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
