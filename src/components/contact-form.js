import React, { useState } from "react"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"

const bgDivStyles = css`
  background-color: ${colors.formBgColor};
  margin: 2rem auto;
  padding: 2rem;
  max-width: 900px;
  position: relative;
  &:before {
    content: "";
    float: left;
    padding-bottom: calc((40 / 93) * 100%);
  }
  &:after {
    clear: left;
    content: " ";
    display: table;
  }

  p {
    padding: 1rem;
  }

  @media screen and (max-width: 375px) {
    padding: 0;
  }
`

const formStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "firstName lastName" "email company" "message message" "buttons buttons";
  grid-gap: 1rem;
  margin: 1rem 0;
  padding: 0 1rem;
  label {
    color: ${colors.textSecondaryBodyColor};
  }
  input,
  textarea,
  button {
    font-size: 1em;
  }

  input,
  textarea {
    width: 100%;
  }

  input,
  textarea {
    resize: none;
    background: white;
    padding: 15px 25px;
    margin: 7px 0px;
    border: 1px solid rgb(226, 227, 228);
    border-radius: 3px;
  }

  button {
    padding: 1rem 2rem;
    border-radius: 3px;
    text-transform: uppercase;
    cursor: pointer;
    border: ${`1px solid ${colors.linkColor}`};

    @media screen and (min-width: 1000px) {
      &:hover {
        border: ${`1px solid ${colors.hoverColor}`};
      }
    }
  }

  input:focus,
  textarea:focus {
    outline: 2px solid ${colors.hoverColor};
  }

  .buttons {
    text-align: right;
    button:first-of-type {
      margin-right: 1rem;
    }
    .clear {
      background-color: ${colors.formBgColor};
      color: ${colors.linkColor};
      @media screen and (min-width: 1000px) {
        &:hover {
          color: ${colors.hoverColor};
        }
      }
    }
    .send {
      color: white;
      background-color: ${colors.linkColor};
      @media screen and (min-width: 1000px) {
        &:hover {
          background-color: ${colors.hoverColor};
        }
      }
    }
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column-reverse;
      button:first-of-type {
        margin-right: 0;
      }
      .send {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-areas: "firstName" "lastName" "email" "company" "message" "buttons";
  }
`

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  // Handle input change of form fields
  const handleInputChange = e => {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: [e.target.value],
    })
  }

  // Clear input fields of form
  const clearInput = e => {
    e.preventDefault()
    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    })
  }

  return (
    <div css={bgDivStyles}>
      <p>
        Let’s get in contact! Please send me an email at{" "}
        <a
          href="mailto:kendyhnguyen1991@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          kendyhnguyen1991@gmail.com
        </a>{" "}
        or fill out this form below
      </p>
      <form
        css={formStyles}
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <label
          css={css`
            grid-area: firstName;
          `}
        >
          First Name
          <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={e => handleInputChange(e)}
          />
        </label>

        <label
          css={css`
            grid-area: lastName;
          `}
        >
          Last Name
          <input
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={e => handleInputChange(e)}
          />
        </label>

        <label
          css={css`
            grid-area: email;
          `}
        >
          Email
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={e => handleInputChange(e)}
          />
        </label>

        <label
          css={css`
            grid-area: company;
          `}
        >
          Company
          <input
            type="text"
            name="company"
            value={inputs.company}
            onChange={e => handleInputChange(e)}
          />
        </label>

        <label
          css={css`
            grid-area: message;
          `}
        >
          Message
          <textarea
            rows="6"
            name="message"
            value={inputs.message}
            onChange={e => handleInputChange(e)}
          />
        </label>

        <div
          className="buttons"
          css={css`
            grid-area: buttons;
          `}
        >
          <button className="clear" onClick={clearInput}>
            Clear
          </button>
          <button className="send" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
