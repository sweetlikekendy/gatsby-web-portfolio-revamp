import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import { colors, pageWidth } from "../styles/theme"

const linkHoverColor = colors.linkColor

const Nav = props => {
  return (
    <nav
      css={css`
        .header-nav-menu {
          width: 400px;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-size: 18px;

          a {
            text-decoration: none;
            color: ${colors.navTextColor};
          }
          a:hover {
            color: ${linkHoverColor};
          }
        }
      `}
    >
      <ul className="header-nav-menu">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Contact Me</Link>
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {}

export default Nav
