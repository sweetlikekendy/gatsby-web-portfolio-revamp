import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Nav from "../components/nav"
import { colors, pageWidth } from "../styles/theme"

const headerBgColor = colors.headerBgColor

const headerStyles = css`
  background-color: ${headerBgColor};
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  .header-container {
    max-width: ${pageWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
  }
`

const Header = ({ location }) => (
  <header id="header" css={headerStyles}>
    <div className="header-container">
      <Link to="/">
        <h1
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
