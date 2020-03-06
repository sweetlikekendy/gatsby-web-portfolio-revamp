import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"
import DecorativeHorizontalBar from "../components/decorative-horizontal-bar"
import Hero from "../components/hero"
import ProjectsSection from "../components/projects-section"
import ContactSection from "../components/contact-section"
import BackToTop from "../components/back-to-top"

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Home" />
    <HeaderImage />
    <DecorativeHorizontalBar />
    <Hero />
    <ProjectsSection id="projects" />
    <ContactSection id="contact-me" />
    <BackToTop />
  </Layout>
)

export default IndexPage
