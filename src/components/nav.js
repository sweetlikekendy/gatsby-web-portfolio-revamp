import React, { useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors } from "../styles/theme"
const linkHoverColor = colors.linkColor
const headerBgColor = colors.headerBgColor
const navTextColor = colors.navTextColor
const linkColor = colors.linkColor

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${headerBgColor};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 75%;
  overflow: hidden;

  button {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${navTextColor};
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;
  }
  @media screen and (min-width: 576px) {
    button {
      &:hover {
        color: ${linkColor};
      }
    }
  }
`

const buttonStyles = css`
  font-size: 18px;
  text-decoration: none;
  color: ${navTextColor};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
`

const Menu = ({ open, handleClick }) => {
  return (
    <StyledMenu open={open}>
      <button
        id="mobile-projects-link"
        css={buttonStyles}
        onClick={handleClick}
        aria-label="scroll to projects"
      >
        Projects
      </button>
      <button
        id="mobile-contact-me-link"
        css={buttonStyles}
        onClick={handleClick}
        aria-label="scroll to contact me"
      >
        Contact Me
      </button>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1rem;
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
    background: ${({ open }) => (open ? `${navTextColor}` : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: right;

    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(-43deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(43deg)" : "rotate(0)")};
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
    case "mobile-projects-link":
    case "projects-link":
      scrollToSection("projects", headerOffset)
      break
    case "mobile-contact-me-link":
    case "contact-me-link":
      scrollToSection("contact-me", headerOffset)
      break
  }
}

const Nav = ({ location }) => {
  const [open, setOpen] = useState(false)

  return (
    <nav
      css={css`
        /* Not on index page, display none the nav menus. Ids only exist on index page */
        display: ${location === "/" ? "block" : "none"};
        .header-nav-menu {
          display: none;
        }
        #mobile-menu {
          display: block;
        }
        @media screen and (min-width: 768px) {
          .header-nav-menu {
            display: flex;
            align-items: center;
            height: 100%;
            white-space: nowrap;
            button:hover {
              color: ${linkHoverColor};
            }
            li {
              margin-left: 3rem;
            }
          }
          #mobile-menu {
            display: none;
          }
        }
      `}
    >
      <ul className="header-nav-menu">
        <li>
          <button
            css={buttonStyles}
            aria-label="scroll to projects"
            onClick={handleClick}
            id="projects-link"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            css={buttonStyles}
            aria-label="scroll to contact me"
            onClick={handleClick}
            id="contact-me-link"
          >
            Contact Me
          </button>
        </li>
      </ul>
      <div id="mobile-menu">
        <Burger
          open={open}
          setOpen={setOpen}
          aria-label="hamburger menu button"
        />
        <Menu open={open} setOpen={setOpen} handleClick={handleClick} />
      </div>
    </nav>
  )
}

export default Nav
