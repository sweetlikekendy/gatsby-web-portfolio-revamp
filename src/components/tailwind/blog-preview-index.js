import React from "react"
import { StyledLink } from "../../styles"
import { format } from "date-fns"
import { Link } from "gatsby"

export default function BlogPreviewIndex({
  category,
  title,
  description,
  createdAt,
  slug,
}) {
  return (
    <div className="flex flex-col">
      <div>
        <Link to={slug} className="inline-block">
          {category === `Dev Talk` && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
              {category}
            </span>
          )}
          {category === `Hobbies` && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
              {category}
            </span>
          )}

          {category === `Technology` && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-pink-100 text-pink-800">
              {category}
            </span>
          )}
        </Link>
      </div>
      <div className="flex-1">
        <Link to={slug} className="block mt-4">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </Link>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={`${createdAt}`}>{createdAt}</time>
          <span aria-hidden="true">&middot;</span>
          <span>6 min read</span>
        </div>
      </div>
    </div>
  )
}
