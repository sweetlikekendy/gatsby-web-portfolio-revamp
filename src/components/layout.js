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
import smoothscroll from "smoothscroll-polyfill"

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

  // for smooth scroll on safari
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return (
    <>
      <Global
        styles={css`
          html {
            position: relative;
            box-sizing: border-box;
            scroll-behavior: smooth;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          /* iOS smooth scrolling */
          * {
            -webkit-overflow-scrolling: touch;
          }
          html,
          body {
            height: 100%;
            box-sizing: border-box;
            /* overflow-x: hidden; */
          }

          body {
            font-size: 16px;
            color: ${colors.textPrimaryBodyColor};
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
          ol,
          ul {
            list-style: none;
          }
          a {
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
            letter-spacing: 0.075em;
          }
          body {
            color: ${colors.textColor};
            letter-spacing: 0.05em;
          }
          .inner {
            max-width: ${pageWidth};
            @media screen and (max-width: 1200px) {
              padding: 1rem;
            }
          }
          .section-title {
            position: relative;
            text-transform: uppercase;
            font-weight: 700;
            &:before {
              content: "";
              position: absolute;
              height: 10px;
              width: 100%;
              bottom: -3px;
              left: 0;

              background: ${colors.sectionUnderline};
            }
          }

          .underline {
            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.2em;
            background-position: 0 88%;
            transition: background-size 0.25s ease-in;
            &:hover {
              background-size: 100% 88%;
            }
          }

          /* Have footer stay at the bottom */
          .site {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
            /* overflow-x: hidden; */
            /* background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 5.07274e-9) 61.98%,
              rgba(0, 70, 105, 0.25) 100% */
            );
          }

          .site-content {
            flex-grow: 1;
          }
        `}
      />
      <div className="site">
        <Header />
        {/* <Header id="header" location={location} /> */}
        <main className="site-content">{children}</main>
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
