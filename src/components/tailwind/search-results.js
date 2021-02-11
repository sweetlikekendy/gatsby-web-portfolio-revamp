import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"
import CategoryTag from "../../styles/category-tag"

export default function SearchResults({ results }) {
  const base = process.env.GATSBY_BLOG_URL || "/blog"

  return (
    <div tw="max-w-2xl mx-auto">
      {" "}
      <ul tw="absolute z-10 top-0 mt-16 max-w-2xl bg-white divide-blueGray-300 divide-y rounded-md shadow-2xl">
        {results.map(post => (
          <li
            key={post.slug}
            tw="relative p-4 hover:bg-blueGray-100"
            // className={`${hoverBackgroundColor} ${padding} ${focus}`}
          >
            <div tw="mb-3 flex justify-between space-x-3">
              <div tw="flex-1 min-w-0">
                <Link to={`${base}/${post.slug}`} tw="block focus:outline-none">
                  <span tw="absolute inset-0" aria-hidden="true"></span>
                  <p
                    tw="truncate font-bold text-blueGray-700"
                    // className={`${title}`}
                  >
                    {post.title}
                  </p>
                </Link>
              </div>
              <CategoryTag category={post.category} />
            </div>
            <div tw="mb-3">
              <p
                // tw="line-clamp-2"
                className="line-clamp-2 text-blueGray-500"
                //  className={`${description}`}
              >
                {post.description}
              </p>
            </div>
            <time
              dateTime={post.publishedAt}
              tw="flex-shrink-0 whitespace-nowrap italic text-blueGray-500"
            >
              {post.publishedAt}
            </time>
          </li>
        ))}
      </ul>
    </div>
  )
}
