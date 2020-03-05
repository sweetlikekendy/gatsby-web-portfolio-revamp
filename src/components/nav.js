import React from "react"
import { css } from "@emotion/core"

import { colors } from "../styles/theme"
const linkHoverColor = colors.linkColor

const Nav = () => {
  // Scroll to the section
  // @param id is the id name of the section (string)
  // @param height is the height of the header. used for offset (int)
  const scrollToSection = (id, height) => {
    const bodyRect = document.body.getBoundingClientRect().top
    const element = document.getElementById(`${id}`)
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - height

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
  const handleClick = e => {
    const header = document.getElementById("header")
    const headerOffset = header.clientHeight

    e.preventDefault()
    if (e.target.id === "projects-link") {
      scrollToSection("projects", headerOffset)
    }
    if (e.target.id === "contact-me-link") {
      scrollToSection("contact-me", headerOffset)
    }
  }

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
          p {
            color: ${colors.navTextColor};
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
        <li onClick={handleClick}>
          <p id="projects-link">Projects</p>
        </li>
        <li onClick={handleClick}>
          <p id="contact-me-link">Contact Me</p>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
