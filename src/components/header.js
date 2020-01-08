import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import Nav from "../components/nav"
import { colors } from "../styles/theme"

const headerBgColor = colors.textPrimaryBodyColor

const headerStyles = css`
  background-color: ${headerBgColor};
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  .header-container {
    display: flex;
  }
`

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    <div className="inner header-container">
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
