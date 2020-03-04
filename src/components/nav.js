import React from "react"
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
            margin-left: 1rem;
          }
          a {
            text-decoration: none;
            color: ${colors.navTextColor};
          }
          a:hover {
            color: ${linkHoverColor};
          }

          @media screen and (min-width: 768px) {
            li {
              margin-left: 3rem;
            }
          }
        }
      `}
    >
      <ul className="header-nav-menu">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
