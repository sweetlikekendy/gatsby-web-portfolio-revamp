import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProjectCard from "./tailwind-project-card"

export default function Projects() {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson {
            edges {
              node {
                projects {
                  title
                  techStack
                  repoLink
                  description
                  demoLink
                  imgAlt
                  type
                  imgSrc {
                    childImageSharp {
                      fixed(width: 350, height: 300) {
                        ...GatsbyImageSharpFixed
                      }
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          // add bg color to here if you want it
          <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            {/* uncomment if you want white bg & 1/3 height */}
            {/* <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div> */}
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  My Portfolio
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  View my current & past personal projects/work I've done below.
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {data.allDataJson.edges[0].node.projects.map(
                  (
                    {
                      imgSrc,
                      imgAlt,
                      description,
                      demoLink,
                      repoLink,
                      title,
                      type,
                    },
                    index
                  ) => (
                    <ProjectCard
                      key={index}
                      imgSrc={imgSrc}
                      imgAlt={imgAlt}
                      type={type}
                      title={title}
                      description={description}
                      demoLink={demoLink}
                      repoLink={repoLink}
                    />
                  )
                )}
                {/* <ProjectCard
                  imgSrc="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  imgAlt=""
                  type="Personal"
                  title="Lorem Ipsum"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                    dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium."
                /> */}
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}
