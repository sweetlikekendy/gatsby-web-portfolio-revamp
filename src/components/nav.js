import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors } from "../styles/theme"
// import Burger from "./burger"
// import MobileMenu from "./mobile-menu"
const linkHoverColor = colors.linkColor
const mobileMenuBgColor = colors.textPrimaryBodyColor

// TODO refactor menu

// #region right
// const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #effffa;
//   transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transition: transform 0.3s ease-in-out;

//   @media (max-width: 576px) {
//     width: 100%;
//   }

//   a {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: #0d0c1d;
//     text-decoration: none;
//     transition: color 0.3s linear;

//     @media (max-width: 576px) {
//       font-size: 1.5rem;
//       text-align: center;
//     }

//     &:hover {
//       color: #343078;
//     }
//   }
// `

// const Menu = ({ open }) => {
//   return (
//     <StyledMenu open={open}>
//       <a href="/">
//         <span aria-label="projects">Projects</span>
//       </a>
//       <a href="/">
//         <span aria-label="contact me">Contact Me</span>
//       </a>
//     </StyledMenu>
//   )
// }

// const StyledBurger = styled.button`
//   position: absolute;
//   top: 1.5rem;
//   right: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? "0" : "1")};
//       transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
//     }
//   }
// `

// const Burger = ({ open, setOpen }) => {
//   return (
//     <StyledBurger open={open} onClick={() => setOpen(!open)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   )
// }

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

const Nav = () => {
  const [open, setOpen] = useState(false)
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

          @media screen and (max-width: 800px) {
            display: none;
          }
        }
        #mobile-menu {
          display: none;

          @media screen and (max-width: 800px) {
            display: block;
          }
        }
      `}
    >
      <ul className="header-nav-menu">
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Contact Me</Link>
        </li>
      </ul>
      {
        <div id="mobile-menu">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      }
      {
        //   <div id="mobile-menu">
        //   <Burger open={open} setOpen={setOpen} />
        //   <MobileMenu open={open} setOpen={setOpen} />
        // </div>
      }
    </nav>
  )
}

export default Nav

// const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #effffa;
//   transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transition: transform 0.3s ease-in-out;

//   @media (max-width: 576px) {
//     width: 100%;
//   }

//   a {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: #0d0c1d;
//     text-decoration: none;
//     transition: color 0.3s linear;

//     @media (max-width: 576px) {
//       font-size: 1.5rem;
//       text-align: center;
//     }

//     &:hover {
//       color: #343078;
//     }
//   }
// `

// const Menu = ({ open }) => {
//   return (
//     <StyledMenu open={open}>
//       <a href="/">
//         <span aria-label="projects">Projects</span>
//       </a>
//       <a href="/">
//         <span aria-label="contact me">Contact Me</span>
//       </a>
//     </StyledMenu>
//   )
// }

// const StyledBurger = styled.button`
//   position: absolute;
//   top: 1.5rem;
//   right: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? "0" : "1")};
//       transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
//     }
//   }
// `

// const Burger = ({ open, setOpen }) => {
//   return (
//     <StyledBurger open={open} onClick={() => setOpen(!open)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   )
// }
