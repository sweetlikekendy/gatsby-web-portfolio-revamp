import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

export default function BlogPaginationNav({
  postsPerPage,
  totalCount,
  currentPage,
  base,
}) {
  const totalPages = Math.ceil(totalCount / postsPerPage)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasNextPage = nextPage <= totalPages
  const hasPrevPage = prevPage >= 1

  return (
    <nav className="border-t border-blueGray-200 px-0 flex items-center justify-between">
      <div className="-mt-px w-0 flex-1 flex">
        {hasPrevPage && (
          <Link
            title="Prev Page"
            to={`${base}${prevPage > 1 ? `/${prevPage}` : ""}`}
            rel="prev"
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
          >
            <svg
              className="mr-3 h-5 w-5 text-blueGray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </Link>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            to={`${base}${i > 0 ? `/${i + 1}` : ""}`}
            key={`page-${i}`}
            activeStyle={tw`border-blue-500 text-blue-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
            className="border-transparent text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        {hasNextPage && (
          <Link
            title="Next Page"
            to={`${base}/${nextPage}`}
            rel="next"
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
          >
            Next
            <svg
              className="ml-3 h-5 w-5 text-blueGray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  )
}
