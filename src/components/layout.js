/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import Header from "./header"
import { colors } from "../styles/theme"

const Layout = ({ children }) => {
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
      <Header />
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            font-size: 16px;
            line-height: 1.6;
            position: relative;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
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
          ol,
          ul {
            list-style: none;
          }
          main {
            /* max-width: 1200px; */
            /* margin: 0 auto; */
          }
          a {
            color: ${colors.linkColor};
            text-decoration: underline;
          }
          a:hover {
            color: ${colors.hoverColor};
            text-decoration: none;
          }
          a {
            color: ${colors.primaryColor};
            text-decoration: underline;
          }
          a:hover {
            color: ${colors.secondaryColor};
            text-decoration: none;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            /* font-family: "Cabin"; */
            color: hsl(0, 0%, 0%);
          }
          body {
            color: ${colors.textColor};
          }
        `}
      />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
