import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
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
        <h1>PAGE NOT FOUND</h1>
        <p>You just hit a route that doesn't exist... :(</p>
        <Link to="/">Go back to the home page</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
