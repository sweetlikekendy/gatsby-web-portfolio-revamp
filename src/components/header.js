import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from "../components/nav"

const Header = ({ location }) => {
  const [scrolledHeight, setScrolledHeight] = useState(0)

  // find how far the user has scrolled
  const findScrolledHeight = () => {
    const yScrollAmount = window.scrollY
    return setScrolledHeight(yScrollAmount)
  }

  useEffect(() => {
    window.addEventListener("scroll", findScrolledHeight)
  }, [scrolledHeight])

  return (
    <header
      className={`bg-blueGray-800 p-6 sticky top-0 z-50 transition-colors ${scrolledHeight >
        40 && `shadow-xl`}`}
    >
      <div className="max-w-6xl my-0 mx-auto flex justify-between items-center">
        <Link className="no-underline" to="/">
          <h1 className="text-3xl text-lightBlue-400">KN</h1>
        </Link>
        <Nav location={location} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
