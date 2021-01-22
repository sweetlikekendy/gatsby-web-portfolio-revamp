import React from "react"
import Arrow from "./svgs/arrow"

const BackToTop = () => {
  const handleClick = e => {
    e.preventDefault()
    if (
      e.target.id === `arrow-up` ||
      e.target.id === `button-up` ||
      e.target.className.baseVal === `to-top-link`
    ) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="my-4 flex flex-col justify-center items-center mx-auto md:mt-24 md:mx-auto md:mb-8 ">
      <button
        id="button-up"
        className="to-top-link bg-violet-400 rounded-full h-20 w-20 mb-4 shadow-md flex justify-center items-center cursor-pointer bg-transparent border-none transition-colors focus:outline-none focus:border-gray-700 md:hover:bg-orange-400 md:hover:shadow-lg md:active:bg-orange-500 md:active:shadow-2xl"
        onClick={handleClick}
      >
        <Arrow
          id="arrow-up"
          className="fill-current text-lightBlue-100"
          size={parseInt(30)}
        />
      </button>
      <p className="text-gray-500 text-opacity-100 uppercase font-semibold">
        Scroll to Top
      </p>
    </div>
  )
}

export default BackToTop
