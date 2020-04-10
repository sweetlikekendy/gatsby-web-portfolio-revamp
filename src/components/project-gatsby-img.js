import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"
import { techLinks } from "../allProjects"
import GithubIcon from "./svgs/github-icon"
import PlayIcon from "./svgs/play-icon"

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
  margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }
  /* Demo button */
  .demo-button {
    color: #fff;
    background-color: ${colors.linkColor};
    @media screen and (min-width: 1000px) {
      &:hover {
        background-color: ${colors.hoverColor};
      }
    }
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
      <div className="projects" css={projectStyles}>
        {data.allDataJson.edges[0].node.projects.map((project, index) => (
          <div key={index} className="project-card" css={projectCardStyles}>
            <a
              href={`${project.demoLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className="image"
                fluid={project.img.childImageSharp.fluid}
                alt={project.img.alt}
              />
              {console.log(project)}
            </a>
            <div className="project-info" css={projectInfoStyles}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
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
                          <p className="tech">
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
                          <p className="tech">
                            <span className="underline">{tech}</span>{" "}
                          </p>
                        </a>
                      )

                    default:
                      return (
                        <p key={index} className="tech">
                          {tech}{" "}
                        </p>
                      )
                  }
                })}
              </div>
              <div className="project-buttons" css={projectButtonsStyles}>
                {project.demoLink && (
                  <a
                    className="demo-button"
                    href={`${project.demoLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayIcon fill="#fff" dimension={parseInt(25)} /> Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    className="repo-button"
                    href={`${project.repoLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon
                      fill={colors.projectCodeBtnTextColor}
                      dimension={parseInt(25)}
                    />
                    Code
                  </a>
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
