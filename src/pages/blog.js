import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { StyledLink } from "../styles"
import { BlogPreview } from "../components/tailwind"

export default function Blog({ data }) {
  const { posts } = data
  const { totalCount: totalNumOfPosts, nodes: blogPostsArray } = posts
  // const totalNumOfPosts = 0
  console.log(blogPostsArray)
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <section className="max-w-6xl mx-auto p-4 sm:px-8 sm:py-16 lg:py-24">
        {totalNumOfPosts === 0 ? (
          <div className="text-blueGray-500 text-base">
            <h2 className="text-blueGray-800 text-5xl mb-5">
              No blogs have been written just yet!
            </h2>
            <p className="text-2xl mb-10">
              Sorry, but I have not written any blog posts. Stay tuned for
              upcoming blog posts!
            </p>
            <p className="text-2xl">
              You can
              <Link to="/">
                <StyledLink> return to the home page, </StyledLink>
              </Link>
              or{" "}
              <a
                href="mailto:kendyhnguyen1991@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledLink>contact me</StyledLink>
              </a>{" "}
              if you have any questions.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {blogPostsArray.map(blog => (
              <BlogPreview
                key={blog.title}
                category={blog.categories[0].title}
                title={blog.title}
                description={blog.description}
                createdAt={blog._createdAt}
                slug={`blog/${blog.slug.current}`}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allSanityPost(sort: { fields: [publishedAt], order: [DESC] }) {
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
