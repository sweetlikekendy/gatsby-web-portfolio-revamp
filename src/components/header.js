import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import Nav from "../components/nav"
import { colors, pageWidth } from "../styles/theme"

const headerBgColor = colors.textPrimaryBodyColor

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
    flex-direction: row-reverse;
    @media screen and (max-width: 800px) {
      flex-direction: row;
    }
  }
`

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    <div className="header-container">
      <Nav />
      <h1
        css={css`
          color: ${colors.logoColor};
        `}
      >
        KN
      </h1>
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
