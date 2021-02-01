import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledLink } from "../styles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="h-full flex justify-center items-center mt-20">
      <div className="max-w-6xl h-full text-blueGray-500 text-base p-4">
        <h2 className="text-blueGray-800 text-xl font-bold mb-3">
          PAGE NOT FOUND
        </h2>
        <p>You just hit a route that doesn't exist... :(</p>
        <Link to="/">
          Click to go back to the
          <StyledLink> home page</StyledLink>.
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
