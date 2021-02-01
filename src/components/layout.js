/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
// import Header from "./header"
import { colors, pageWidth } from "../styles/theme"
// import Footer from "./footer"
import Footer from "./tailwind/tailwind-footer"
import Header from "./tailwind/tailwind-header"

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
            letter-spacing: 0.3em;
          }

          body,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          ol,
          ul {
            margin: 0;
            padding: 0;
            font-weight: normal;
            font-family: Arial, sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            /* font-family: "Cabin"; */
            color: hsl(0, 0%, 0%);
            letter-spacing: 0.075em;
          }
          body {
            letter-spacing: 0.05em;
          }
        `}
      />
      {/* FLex in a column and have the main content grow to keep the footer always at the bottom of the page */}
      <div className="flex min-h-screen flex-col">
        <Header />
        {/* <Header id="header" location={location} /> */}
        <main className="h-ful flex-grow">{children}</main>
        {/* <Footer /> */}
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
