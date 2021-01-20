import React from "react"
import ContactForm from "./contact-form"
import { css } from "@emotion/core"
const ContactSection = props => {
  return (
    <section
      className="inner"
      css={css`
        margin-top: 51px;
      `}
      {...props}
    >
      <h2 className="text-2xl">
        <span className="section-title">Contact Me</span>
      </h2>
      <ContactForm />
    </section>
  )
}

export default ContactSection
