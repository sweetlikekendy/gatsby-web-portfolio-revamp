import React from "react"
import ContactForm from "./contact-form"
import { Section } from "./styles"

const ContactSection = props => {
  return (
    <Section {...props}>
      <h2 className="text-2xl">
        <span className="section-title">Contact Me</span>
      </h2>
      <ContactForm />
    </Section>
  )
}

export default ContactSection
