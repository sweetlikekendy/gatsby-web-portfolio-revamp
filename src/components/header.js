import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Nav from "../components/nav"
import { colors, pageWidth } from "../styles/theme"

const headerBgColor = colors.headerBgColor

const Header = ({ location }) => {
  const [scrolledHeight, setScrolledHeight] = useState(0)

  // find how far the user has scrolled
  const findScrolledHeight = () => {
    const yScrollAmount = window.scrollY
    return setScrolledHeight(yScrollAmount)
  }

  useEffect(() => {
    window.addEventListener("scroll", findScrolledHeight)
  }, [scrolledHeight])

  return (
    <header
      id="header"
      className="p-6"
      css={css`
        background-color: ${headerBgColor};
        position: sticky;
        top: 0;
        z-index: 999;
        /* Add box shadow after the user has scrolled 20px */
        box-shadow: ${scrolledHeight > 20 &&
          "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px"};
        .header-container {
          max-width: ${pageWidth};
          margin: 0 auto;
          display: flex;
          justify-content: space-between;

          a {
            text-decoration: none;
          }
        }
      `}
    >
      <div className="header-container">
        <Link to="/">
          <h1
            className="text-3xl"
            css={css`
              color: ${colors.logoColor};
            `}
          >
            KN
          </h1>
        </Link>
        <Nav location={location} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
