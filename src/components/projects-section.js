import React from "react"
import { pageWidth } from "../styles/theme"
import { css } from "@emotion/core"
import Projects from "./projects"

const ProjectsSection = () => {
  return (
    <section
      className="inner"
      css={css`
        max-width: ${pageWidth};
        margin: 0 auto;
      `}
    >
      <h2>
        <span className="section-title">Projects</span>
      </h2>
      <Projects />
    </section>
  )
}

export default ProjectsSection
