import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { allProjects } from "../allProjects"
import { colors } from "../styles/theme"
import GithubIcon from "./svgs/github-icon"
import PlayIcon from "./svgs/play-icon"

const projectStyles = css`
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const projectCardStyles = css`
  // margin: 1rem;
  border: 1px solid rgb(202, 202, 202);
  width: 30%;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 40%;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const projectInfoStyles = css`
  margin: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 700px;
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
  }
  /* Demo button */
  a:first-of-type {
    color: #fff;
    background-color: ${colors.linkColor};
    &:hover {
      background-color: ${colors.hoverColor};
    }
  }
  /* Github button */
  a:last-of-type {
    background-color: ${colors.projectCodeBtnBgColor};
    color: ${colors.projectCodeBtnTextColor};
    &:hover {
      background-color: ${colors.hoverColor};
    }
  }

  @media screen and (max-width: 721px) {
    a {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`

const Projects = () => {
  return (
    <div className="projects" css={projectStyles}>
      {allProjects.map((project, index) => (
        <div key={index} className="project-card" css={projectCardStyles}>
          <img src={project.img} alt="Project" />
          <div className="project-info" css={projectInfoStyles}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-used">
              {project.techStack.map((tech, index) => (
                <p key={index} className="tech">
                  {tech}{" "}
                </p>
              ))}
            </div>
            <div className="project-buttons" css={projectButtonsStyles}>
              <Link to={`${project.demoLink}`}>
                <PlayIcon fill="#fff" dimension="25" /> Demo
              </Link>
              <Link to={`${project.repoLink}`}>
                <GithubIcon
                  fill={colors.projectCodeBtnTextColor}
                  dimension="25"
                />
                Code
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
