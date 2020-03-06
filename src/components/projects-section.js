import React from "react"
import { css } from "@emotion/core"
import Projects from "./projects"
import { pageWidth } from "../styles/theme"

const ProjectsSection = props => {
  return (
    <section
      className="inner"
      css={css`
        max-width: ${pageWidth};
        margin: 51px auto 0;
      `}
      {...props}
    >
      <h2>
        <span className="section-title">Projects</span>
      </h2>
      <Projects />
    </section>
  )
}

export default ProjectsSection
