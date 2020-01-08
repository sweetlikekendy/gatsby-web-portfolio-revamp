import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"

const linkHoverColor = colors.linkColor

const Nav = () => {
  return (
    <nav
      css={css`
        .header-nav-menu {
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 18px;
          white-space: nowrap;

          li {
            margin-left: 3rem;
          }
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

export default Nav
