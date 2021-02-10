import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"

export default function Post({ data, pageContext }) {
  const { post } = data
  const { prev, next, base } = pageContext

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4 sm:px-8 sm:py-16 lg:py-24">
        <p className="py-1 text-blueGray-600 text-sm font-normal">
          {post.publishedAt}
        </p>
        <h1 className="pb-2 text-blueGray-900 text-3xl font-extrabold leading-tight">
          {post.title}
        </h1>
        <Img
          className="w-full h-96"
          fluid={{ ...post.mainImage.asset.fluid, aspectRatio: 1 }}
        />
        <div className="py-4 text-blueGray-500">
          <BlockContent blocks={post._rawBody} />
        </div>
        <div className="border-t border-blueGray-200 px-0">
          <nav className="-mt-px flex items-center justify-between">
            {prev && (
              <Link
                to={`${base}/${prev.slug.current}`}
                className="flex flex-col border-t-2 border-transparent pt-4 pr-1 inline-flex text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
              >
                <span className="text-blueGray-700 hover:text-blueGray-800 inline-flex items-center mb-2">
                  <HiArrowNarrowLeft className="mr-3 h-5 w-5 text-blueGray-500" />
                  Previous
                </span>
                <span className="hidden inline-block max-w-xs text-blueGray-500 text-sm font-normal sm:block">
                  {prev.title}
                </span>
              </Link>
            )}
            <div className="-mt-px flex-1"></div>
            {next && (
              <Link
                to={`${base}/${next.slug.current}`}
                className="flex flex-col items-end border-t-2 border-transparent pt-4 pr-1 inline-flex text-sm font-medium text-blueGray-500 hover:text-blueGray-800 hover:border-blueGray-400"
              >
                <span className="text-blueGray-700 hover:text-blueGray-800 inline-flex items-center mb-2">
                  Next
                  <HiArrowNarrowRight className="ml-3 h-5 w-5 text-blueGray-500" />
                </span>
                <span className="hidden inline-block max-w-xs text-blueGray-500 text-sm font-normal sm:block">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </Layout>
  )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      _createdAt(formatString: "MMM D, YYYY")
      _updatedAt(formatString: "MMM D, YYYY")
      publishedAt(formatString: "MMM D, YYYY")
      _rawBody
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
