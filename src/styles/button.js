import React from "react"

export default function Button({ children, ...rest }) {
  return (
    <button
      className={`text-none w-3/5 mb-4 p-3 rounded  text-white bg-blue-500 border border-transparent inline-flex justify-center items-center uppercase font-medium text-md transition-colors shadow-sm md:hover:bg-blue-600 md:hover-shadow-md md:active:shadow-xl md:active:bg-blue-800`}
      {...rest}
    >
      {children}
    </button>
  )
}
