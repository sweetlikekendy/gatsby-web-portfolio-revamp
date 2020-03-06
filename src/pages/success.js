import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = ({ location }) => {
  // console.log(location)
  return (
    <Layout>
      <SEO title="Success" />
      <div
        css={css`
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            height: 100%;
            max-width: 700px;
          `}
        >
          <h1>Thank you for contacting me!</h1>
          <p>I'll respond to you ASAP :)</p>
          <Link to="/">Go back to the home page</Link>
        </div>
      </div>
    </Layout>
  )
}

export default SuccessPage
