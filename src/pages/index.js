import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"
import DecorativeHorizontalBar from "../components/decorative-horizontal-bar"
import Hero from "../components/hero"
import ProjectsSection from "../components/projects-section"
import ContactSection from "../components/contact-section"
import BackToTop from "../components/back-to-top"
import TailwindHero from "../components/tailwind/tailwind-hero"
import Projects from "../components/tailwind/tailwind-projects"
import Form from "../components/tailwind/tailwind-form"
import BrandAuthority from "../components/tailwind/tailwind-brand-authority"
import Contact from "../components/tailwind/tailwind-contact"

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Home" />
    <TailwindHero />

    {/* <HeaderImage /> */}
    {/* <DecorativeHorizontalBar /> */}
    <BrandAuthority />
    <Projects />
    <Contact />
    {/* <Form /> */}
    {/* <Hero /> */}
    {/* <ProjectsSection id="projects" /> */}
    {/* <ContactSection id="contact-me" /> */}
    {/* <BackToTop /> */}
  </Layout>
)

export default IndexPage
