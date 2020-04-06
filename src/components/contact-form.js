import React from "react"
import { css } from "@emotion/core"
import { Formik, useField } from "formik"
import * as Yup from "yup"
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
    text-transform: uppercase;
  }
  .error {
    color: #fa3737;
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

  #firstName {
    grid-area: firstName;
  }
  #lastName {
    grid-area: lastName;
  }
  #email {
    grid-area: email;
  }
  #company {
    grid-area: company;
  }
  #message {
    grid-area: message;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-areas: "firstName" "lastName" "email" "company" "message" "buttons";
  }
`

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div id={field.name}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} required />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}
const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <textarea> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div id={field.name}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-input" {...field} {...props} required />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

const ContactForm = () => {
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
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          company: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
          message: Yup.string().required("Required"),
        })}
      >
        {formik => (
          <form
            css={formStyles}
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <MyTextInput label="First Name" name="firstName" type="text" />
            <MyTextInput label="Last Name" name="lastName" type="text" />
            <MyTextInput label="Email" name="email" type="text" />
            <MyTextInput label="Company" name="company" type="text" />
            <MyTextArea
              label="Message"
              name="message"
              type="textarea"
              rows="6"
            />

            <div
              className="buttons"
              css={css`
                grid-area: buttons;
              `}
            >
              <button className="send" type="submit">
                Send
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
