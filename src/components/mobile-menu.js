import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const mobileMenuStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
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
    color: #0d0c1d;
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

const MobileMenu = ({ open }) => {
  return (
    <nav css={mobileMenuStyles} open={open}>
      <Link to="#projects">
        <span aria-label="projects">Projects</span>
      </Link>
      <Link to="#contact-me">
        <span aria-label="contact me">Contact Me</span>
      </Link>
    </nav>
  )
}

MobileMenu.propTypes = {}

export default MobileMenu
