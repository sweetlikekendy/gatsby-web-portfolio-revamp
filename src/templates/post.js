import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function Post({ data, pageContext }) {
  const { post } = data
  const { prev, next, base } = pageContext
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 sm:px-8 sm:py-16 lg:py-24">
        <p className="py-1 text-gray-900 text-sm font-normal">
          {post.publishedAt}
        </p>
        <h1 className="pb-2 text-gray-900 text-3xl font-extrabold leading-tight">
          {post.title}
        </h1>
        <Img
          className="w-full h-80 rounded-lg"
          fluid={{ ...post.mainImage.asset.fluid, aspectRatio: 1 }}
        />
        <div className="py-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab numquam
            blanditiis libero eos similique voluptates quos minus velit nisi ad
            dolorem quia animi sint officia, quo laboriosam iste aliquam
            placeat?
          </p>
        </div>
        <div className="flex justify-between py-4 border-t-2 border-gray-100">
          {prev ? (
            <Link to={`${base}/${prev.slug.current}`}>
              <span className="text-blueGray-700 hover:text-blue-600 font-bold">
                Previous
              </span>
              <br />
              <span className="inline-block max-w-xs text-black text-sm font-normal">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div></div>
          )}

          {next && (
            <Link to={`${base}/${next.slug.current}`} className="text-right">
              <span className="text-blueGray-700 hover:text-blue-600 font-bold">
                Next
              </span>
              <br />
              <span className="inline-block max-w-xs text-black text-sm font-normal">
                {next.title}
              </span>
            </Link>
          )}
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
