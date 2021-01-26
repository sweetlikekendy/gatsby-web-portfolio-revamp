import React, { useState } from "react"

const StyledButton = ({ children, ...rest }) => (
  <button
    className="text-lg no-underline text-blueGray-100 bg-transparent cursor-pointer uppercase tracking-wider transition-colors font-semibold hover:text-cyan-300"
    {...rest}
  >
    {children}
  </button>
)

const StyledMobileButton = ({ children, ...rest }) => (
  <button
    className="text-2xl no-underline p-8 text-center text-blueGray-100 bg-transparent cursor-pointer uppercase tracking-wider transition-colors font-bold hover:text-cyan-300"
    {...rest}
  >
    {children}
  </button>
)

const Menu = ({ open, handleClick }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 
      shadow-2xl overflow-hidden flex flex-col justify-center items-center 
      bg-blueGray-800 h-screen text-left 
      transform transition ease-in-out duration-500 sm:duration-700
      ${open ? `translate-x-0` : `translate-x-full`}
      `}
    >
      <StyledMobileButton
        id="mobile-projects-link"
        onClick={handleClick}
        aria-label="scroll to projects"
      >
        Projects
      </StyledMobileButton>
      <StyledMobileButton
        id="mobile-contact-me-link"
        onClick={handleClick}
        aria-label="scroll to contact me"
      >
        Contact Me
      </StyledMobileButton>
    </div>
  )
}

const Burger = ({ open, setOpen }) => {
  const basicDivClasses = `relative w-8 h-1 bg-blueGray-100 rounded-xl origin-right
  transform transition ease-in-out duration-500 sm:duration-700`

  return (
    <button
      // TODO check if border-none is needed
      className="fixed top-6 right-4 flex flex-col justify-around items-center w-8 h-8 bg-transparent border-none outline-none cursor-pointer p-0 z-20 focus:outline-none"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div
        className={`${basicDivClasses} ${open ? `-rotate-45` : `rotate-0`}`}
      />
      <div
        className={`${basicDivClasses} ${open ? `opacity-0` : `opacity-100`} ${
          open ? `-translate-x-6` : `translate-x-0`
        }`}
      />
      <div
        className={`${basicDivClasses} ${open ? `rotate-45` : `rotate-0`}`}
      />
    </button>
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
    default:
      console.log(`Id of element not found`)
  }
}

const Nav = ({ location }) => {
  const [open, setOpen] = useState(false)

  return (
    /* Not on index page, display none the nav menus. Ids only exist on index page */
    <nav
      className={`${location === "/" ? "block" : "hidden"}`}
      location={location}
    >
      <ul className="header-nav-menu hidden md:flex md:items-center md:h-full md:whitespace-nowrap">
        <li className="relative ml-12 tracking-wider inline-block">
          <StyledButton
            aria-label="scroll to projects"
            onClick={handleClick}
            id="projects-link"
          >
            Projects
          </StyledButton>
        </li>
        <li className=" relative ml-12 tracking-wider inline-block">
          <StyledButton
            aria-label="scroll to contact me"
            onClick={handleClick}
            id="contact-me-link"
          >
            Contact Me
          </StyledButton>
        </li>
      </ul>
      <div id="mobile-menu" className="block md:hidden">
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
