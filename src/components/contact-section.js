import React from "react"
import PropTypes from "prop-types"
import ContactForm from "./contact-form"
import { css } from "@emotion/core"

const ContactSection = props => {
  return (
    <section className="inner">
      <h2>Contact Me</h2>
      <ContactForm />
    </section>
  )
}

ContactSection.propTypes = {}

export default ContactSection
