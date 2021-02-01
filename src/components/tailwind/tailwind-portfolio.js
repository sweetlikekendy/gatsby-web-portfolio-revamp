import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProjectCard from "./tailwind-portfolio-card"

export default function Portfolio(props) {
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
          <div
            className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
            {...props}
          >
            {/* uncomment if you want white bg & 1/3 height */}
            {/* <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div> */}
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-blueGray-900 sm:text-4xl">
                  My Portfolio
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-blueGray-500 sm:mt-4">
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
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}
