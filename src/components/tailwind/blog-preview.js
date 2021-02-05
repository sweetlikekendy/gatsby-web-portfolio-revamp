import React from "react"
import { StyledLink } from "../../styles"

export default function BlogPreview({
  catergory,
  title,
  description,
  createdAt,
}) {
  return (
    <div className="flex flex-col">
      <div>
        <a href="#" className="inline-block">
          {catergory === `Case Study` && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {catergory}
            </span>
          )}
          {catergory === `Video` && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {catergory}
            </span>
          )}

          {catergory === `Article` && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
              {catergory}
            </span>
          )}
        </a>
      </div>
      <div className="flex-1">
        <a href="#" className="block mt-4">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </a>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime="2020-03-16">Mar 16, 2020</time>
          <span aria-hidden="true">&middot;</span>
          <span>6 min read</span>
        </div>
      </div>
    </div>
  )
}
