import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  BlogIndex,
  BrandAuthority,
  Contact,
  FeatureSection,
  Hero,
  Portfolio,
} from "../components/tailwind"

export default function IndexPage({ data }) {
  const { posts } = data
  // Destructure the posts.nodes into a blogsArray
  const { nodes: blogPostsArray } = posts

  return (
    <Layout location="/">
      <SEO title="Kendy Nguyen" />
      <Hero />
      {/* <FeatureSection /> */}
      {/* <BrandAuthority /> */}
      <Portfolio id="portfolio" />
      <BlogIndex blogPosts={blogPostsArray} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: [DESC] }
    ) {
      totalCount
      nodes {
        _createdAt(formatString: "MMM D, YYYY")
        _updatedAt(formatString: "MMM D, YYYY")
        publishedAt(formatString: "MMM D, YYYY")
        title
        description
        slug {
          current
        }
        categories {
          title
        }
        mainImage {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
