import React from "react"
import { css } from "@emotion/core"

import { colors } from "../styles/theme"
const linkHoverColor = colors.linkColor

const Nav = () => {
  // Scroll to the section
  // @param id is the id name of the section (string)
  // @param height is the height of the header. used for offsetting the scroll (int)
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

  // handle click event on nav menu items
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
          white-space: nowrap;

          li {
            margin-left: 1rem;
          }
          button {
            font-size: 18px;
            text-decoration: none;
            color: ${colors.navTextColor};
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: 600;
          }
          button:hover {
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
          <button onClick={handleClick} id="projects-link">
            Projects
          </button>
        </li>
        <li>
          <button onClick={handleClick} id="contact-me-link">
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
