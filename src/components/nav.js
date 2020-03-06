import React from "react"
import { css } from "@emotion/core"

import { colors } from "../styles/theme"
const linkHoverColor = colors.linkColor

//#region left aligned
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${mobileMenuBgColor};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${colors.navTextColor};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span aria-label="projects">Projects</span>
      </a>
      <a href="/">
        <span role="img" aria-label="contact me">
          Contact Me
        </span>
      </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? `${colors.navTextColor}` : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Nav = ({ location }) => {
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
    const id = e.target.id
    switch (id) {
      case "work-experience-link":
        scrollToSection("work-experience", headerOffset)
        break
      case "projects-link":
        scrollToSection("projects", headerOffset)
        break
      case "contact-me-link":
        scrollToSection("contact-me", headerOffset)
        break
    }
  }

  return (
    <nav
      css={css`
        /* Not on index page, display none the nav menus. Ids only exist on index page */
        display: ${location === "/" ? "block" : "none"};
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
