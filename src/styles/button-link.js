import React from "react"
import { Link } from "gatsby"

export default function ButtonLink({
  children,
  isExternal,
  isPrimary,
  isSecondary,
  ...rest
}) {
  if (isExternal) {
    if (isSecondary) {
      return (
        <a
          className={`text-none w-3/5 mb-4 p-3 rounded bg-blue-100 text-blue-600 border border-transparent inline-flex justify-center items-center uppercase font-medium text-md transition-colors shadow-sm md:hover:bg-blue-200 md:hover-shadow-md md:active:shadow-xl md:active:bg-blue-300`}
          {...rest}
        >
          {children}
        </a>
      )
    }
    return (
      <a
        className={`text-none w-3/5 mb-4 p-3 rounded text-white bg-blue-500 border border-transparent inline-flex justify-center items-center uppercase font-medium text-md transition-colors shadow-sm md:hover:bg-blue-600 md:hover-shadow-md md:active:shadow-xl md:active:bg-blue-800`}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      className={`text-none w-3/5 mb-4 p-3 rounded text-white bg-blue-500 border border-transparent inline-flex justify-center items-center uppercase font-medium text-md transition-colors shadow-sm md:hover:bg-blue-600 md:hover-shadow-md md:active:shadow-xl md:active:bg-blue-800`}
      {...rest}
    >
      {children}
    </Link>
  )
}
