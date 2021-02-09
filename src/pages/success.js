import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledLink } from "../styles"

const SuccessPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Success" />
      <div className="flex-grow max-w-6xl mx-auto relative overflow-hidden my-auto px-4 py-8 sm:px-8 lg:py-24 ">
        <div className="text-blueGray-500 text-base">
          <h2 className="text-blueGray-800 text-5xl mb-5">
            Thank you for contacting me!
          </h2>
          <p className="text-2xl mb-10">
            I'll respond to you ASAP{" "}
            <span role="img" aria-label="Happy face">
              😁
            </span>
            !
          </p>
          <p className="text-2xl">
            You can
            <Link to="/">
              <StyledLink> return to the home page,</StyledLink> or close the
              tab if you're done.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SuccessPage
