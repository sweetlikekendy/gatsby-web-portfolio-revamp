import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledLink } from "../styles"

const SuccessPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Success" />
      <div className="h-full flex justify-center items-center mt-20">
        <div className="max-w-6xl h-full text-blueGray-500 text-base p-4">
          <h2 className="text-blueGray-800 text-xl font-bold mb-3">
            Thank you for contacting me!
          </h2>
          <p>I'll respond to you ASAP :)</p>
          <Link to="/">
            Click to go back to the
            <StyledLink> home page</StyledLink>.
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default SuccessPage
