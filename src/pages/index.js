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
  console.log(data)
  return (
    <Layout location="/">
      <SEO title="Kendy Nguyen" />
      <Hero />
      {/* <FeatureSection /> */}
      {/* <BrandAuthority /> */}
      <Portfolio id="portfolio" />
      {/* <BlogIndex /> */}
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allSanityPost(
      # filter: { feature: { eq: true } }
      sort: { fields: [publishedAt], order: [DESC] }
    ) {
      totalCount
      nodes {
        # feature
        publishedAt
        title
        # description
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
