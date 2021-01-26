import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"
import { techLinks } from "../allProjects"
import { GrGithub, GrCirclePlay } from "react-icons/gr"
import { FaRegPlayCircle, FaGithub } from "react-icons/fa"
import GithubIcon from "./svgs/github-icon"
import PlayIcon from "./svgs/play-icon"
import { Button } from "../styles"

const projectStyles = css`
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const projectCardStyles = css`
  border: 1px solid rgb(202, 202, 202);
  flex-basis: 30%;
  margin-bottom: 2rem;
  .image {
    height: 300px;
  }
  @media screen and (max-width: 1000px) {
    flex-basis: 40%;
  }
  @media screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`

const projectInfoStyles = css`
  margin: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  p {
    color: ${colors.textSecondaryBodyColor};
    margin-bottom: 1rem;
  }
  .tech-used {
    display: flex;
    flex-wrap: wrap;
  }
  .tech {
    color: ${colors.hoverColor};
    border: 1px ${colors.hoverColor} solid;
    border-radius: 3px;
    margin: 0.5rem 0.5rem 0 0;
    padding: 0.5rem;
  }
  .tech > p:last-of-type {
    margin-top: 0.5rem;
  }
`

const projectButtonsStyles = css`
  ${"" /* margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap; */}
  a {
    ${"" /* text-decoration: none;
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    text-transform: uppercase; */}
  }
  /* Demo button */
  .demo-button {
    ${"" /* color: #fff;
    background-color: ${colors.linkColor};
    @media screen and (min-width: 1000px) {
      &:hover {
        background-color: ${colors.hoverColor};
      }
    } */}
  }

  /* Github repo button */
  .repo-button {
    background-color: ${colors.projectCodeBtnBgColor};
    color: ${colors.projectCodeBtnTextColor};
    @media screen and (min-width: 1000px) {
      &:hover {
        background-color: ${colors.hoverColor};
      }
    }
  }

  @media screen and (max-width: 500px) {
    a {
      width: 100%;
    }
    a:first-of-type {
      margin-bottom: 1rem;
    }
    flex-direction: column;
    align-items: center;
  }
`

const ComponentA = () => (
  <StaticQuery
    query={graphql`
      {
        allDataJson {
          edges {
            node {
              projects {
                name
                techStack
                repoLink
                description
                demoLink
                img {
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
    render={data => (
      <div
        className="projects mx-auto mt-8 -mb-8 flex justify-center flex-wrap"
        // css={projectStyles}
      >
        {data.allDataJson.edges[0].node.projects.map((project, index) => (
          <div
            key={index}
            className="project-card mb-8 mx-0 border w-full sm:w-2/5 sm:mx-4 lg:mx-8 md:w-1/3 lg:w-1/4"
            // css={projectCardStyles}
          >
            <a
              href={`${project.demoLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className="image"
                fluid={{
                  ...project.img.childImageSharp.fluid,
                  aspectRatio: 1,
                }}
                alt={project.img.alt}
              />
            </a>
            <div
              className="project-info m-7"
              // css={projectInfoStyles}
            >
              <h3 className="mb-2 uppercase text-blueGray-700 font-bold">
                {project.name}
              </h3>
              <p className="mb-4 text-blueGray-700">{project.description}</p>
              <div className="tech-used flex flex-wrap -mb-2 -mr-2">
                {project.techStack.map((tech, index) => {
                  switch (tech) {
                    case "gatsby":
                      return (
                        <a
                          key={index}
                          href={techLinks[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="tech text-orange-500 border rounded p-2 mb-2 mr-2 border-orange-500">
                            <span className="underline">{tech}</span>{" "}
                          </p>
                        </a>
                      )

                    case "sanity":
                      return (
                        <a
                          key={index}
                          href={techLinks[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="tech text-orange-500 border rounded p-2 mt-2 mr-2 border-orange-500">
                            <span className="underline">{tech}</span>{" "}
                          </p>
                        </a>
                      )

                    default:
                      return (
                        <p
                          key={index}
                          className="tech text-orange-500 border rounded p-2 mt-2 mr-2 border-orange-500"
                        >
                          {tech}{" "}
                        </p>
                      )
                  }
                })}
              </div>
              <div
                className="project-buttons mx-auto my-8 flex justify-evenly items-center flex-wrap"
                css={projectButtonsStyles}
              >
                {project.demoLink && (
                  <Button
                    isExternal
                    href={`${project.demoLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaRegPlayCircle className="mr-2" /> Demo
                  </Button>
                )}
                {project.repoLink && (
                  <Button
                    isExternal
                    isSecondary
                    href={`${project.repoLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrGithub className="mr-2" /> Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
)
export default ComponentA
