/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import Footer from "./tailwind/footer"
import Header from "./tailwind/header"
import { CgClose } from "react-icons/cg"

const Layout = ({ children, location }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const [showWebsiteStatusBanner, setShowWebsiteStatusBanner] = useState(true)

  const handleWebsitStatusBanner = () => setShowWebsiteStatusBanner(false)

  return (
    <>
      <Global
        styles={css`
          html {
            position: relative;
            box-sizing: border-box;
          }

          body {
            line-height: 1.6;
            letter-spacing: 0.025em;
            font-family: "Ubuntu", sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Roboto", Arial;
            color: hsl(0, 0%, 0%);
            letter-spacing: 0.025em;
          }
        `}
      />
      {showWebsiteStatusBanner && (
        <div className="flex bg-blue-900 p-4 text-white uppercase text-center">
          <div className="max-w-6xl flex mx-auto flex items-center">
            <p className="text-sm">
              If you notice anything not working or out of place, that is
              because my website is currently undergoing some changes
            </p>
            {/* <button
              type="button"
              stripHash
              className="ml-3 inline-flex items-center p-2 rounded-md justify-center text-blueGray-100 hover:text-blueGray-700 hover:bg-blueGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => handleWebsitStatusBanner()}
            >
              <span className="sr-only">Close banner</span>
              <CgClose className="w-5 h-5" />
            </button> */}
          </div>
        </div>
      )}
      {/* FLex in a column and have the main content grow to keep the footer always at the bottom of the page */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
