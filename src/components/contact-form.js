import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"

const ContactForm = props => {
  return (
    <div
      css={css`
        background-color: ${colors.formBgColor};
        margin: 2rem auto 2rem;
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
      `}
    >
      <p>
        Let’s get in contact! Please send me an email at{" "}
        <Link to="/">kendyhnguyen1991@gmail.com</Link> or fill out this form
        below
      </p>
      <form
        css={css`
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          p {
            margin: 0;
          }
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
            cursor: pointer;
            border: ${`1px solid ${colors.linkColor}`};

            &:hover {
              border: ${`1px solid ${colors.hoverColor}`};
            }
          }
          input:focus,
          textarea:focus {
            outline: 2px solid ${colors.hoverColor};
          }
          .full-width {
            grid-column: 1 / 3;
          }
          .second-column {
            grid-column: 2/3;
            text-align: right;

            button:last-child {
              margin-left: 1rem;
            }
            .clear {
              background-color: ${colors.formBgColor};
              color: ${colors.linkColor};
              &:hover {
                color: ${colors.hoverColor};
              }
            }
            .send {
              color: white;
              background-color: ${colors.linkColor};
              &:hover {
                background-color: ${colors.hoverColor};
              }
            }
          }
        `}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>First Name</label>
          <input type="text" name="first-name" />
        </p>
        <p>
          <label>Last Name</label>
          <input type="text" name="last-name" />
        </p>

        <p>
          <label>Email</label>
          <input type="text" name="email" />
        </p>
        <p>
          <label>Company</label>
          <input type="text" name="company" />
        </p>

        <p className="full-width">
          <label>Message</label>
          <textarea rows="6" name="message" />
        </p>

        <p className="second-column">
          <button className="clear">Clear</button>
          <button className="send" type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  )
}

ContactForm.propTypes = {}

export default ContactForm
