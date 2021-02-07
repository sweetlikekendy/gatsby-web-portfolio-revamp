import { Link } from "gatsby"
import React from "react"
import { BlogPreview } from "."
import { StyledLink } from "../../styles"

export default function BlogIndex() {
  const testBlog = [
    {
      catergory: `Case Study`,
      title: `Writing effective landing page copy`,
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure
      iusto fugiat commodi sequi.`,
      createdAt: new Date(),
    },
    {
      catergory: `Article`,
      title: `Improve your customer experience`,
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure
      iusto fugiat commodi sequi.`,
      createdAt: new Date(),
    },
    {
      catergory: `Video`,
      title: `How to use search engine optimization to drive sales`,
      description: `Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.`,
      createdAt: new Date(),
    },
  ]
  return (
    <div className="max-w-7xl mx-auto bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-lg mx-auto lg:text-center lg:max-w-3xl">
          <h2 className="text-3xl tracking-normal font-extrabold text-blueGray-900 sm:text-4xl">
            Recent Blog Posts
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-blueGray-500 sm:mt-4">
            See what else I've written about{" "}
            <Link to="/blog">
              <StyledLink>here.</StyledLink>
            </Link>
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {testBlog.map(blog => (
            <BlogPreview
              key={blog.title}
              catergory={blog.catergory}
              title={blog.title}
              description={blog.description}
              createdAt={blog.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
