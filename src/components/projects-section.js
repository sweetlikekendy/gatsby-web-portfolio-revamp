import React from "react"
import PropTypes from "prop-types"
import { pageWidth } from "../styles/theme"
import { css } from "@emotion/core"

const ProjectsSection = props => {
  return (
    <section
      css={css`
        max-width: ${pageWidth};
        margin: 0 auto;
      `}
    >
      <h2>Projects</h2>
    </section>
  )
}

ProjectsSection.propTypes = {}

export default ProjectsSection
