import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css, jsx } from "@emotion/core"
import Nav from "../components/nav"
import { colors, pageWidth } from "../styles/theme"

const headerBgColor = colors.textPrimaryBodyColor

const headerStyles = css`
  background-color: ${headerBgColor};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  .header-container {
    display: flex;
    margin: 0 auto;
    max-width: ${pageWidth};
  }
`

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    <div className="header-container">
      <h1
        css={css`
          color: ${colors.logoColor};
          width: 100%;
        `}
      >
        KN
      </h1>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
