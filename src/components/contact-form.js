import React from "react"
import { Link } from "gatsby"
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

  .buttons {
    text-align: right;
    button:first-of-type {
      margin-right: 1rem;
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
    @media screen and (max-width: 350px) {
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
  return (
    <div css={bgDivStyles}>
      <p>
        Let’s get in contact! Please send me an email at{" "}
        <Link to="/">kendyhnguyen1991@gmail.com</Link> or fill out this form
        below
      </p>
      <form css={formStyles} name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <label
          css={css`
            grid-area: firstName;
          `}
        >
          First Name
          <input type="text" name="first-name" />
        </label>

        <label
          css={css`
            grid-area: lastName;
          `}
        >
          Last Name
          <input type="text" name="last-name" />
        </label>

        <label
          css={css`
            grid-area: email;
          `}
        >
          Email
          <input type="text" name="email" />
        </label>

        <label
          css={css`
            grid-area: company;
          `}
        >
          Company
          <input type="text" name="company" />
        </label>

        <label
          css={css`
            grid-area: message;
          `}
        >
          Message
          <textarea rows="6" name="message" />
        </label>

        <div
          className="buttons"
          css={css`
            grid-area: buttons;
          `}
        >
          <button className="clear">Clear</button>
          <button className="send" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
