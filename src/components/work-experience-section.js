import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import WorkExperience from "./work-experience"
import { pageWidth } from "../styles/theme"

const WorkExperienceSection = props => {
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
        <span className="section-title">Work Experience</span>
      </h2>
      <WorkExperience />
    </section>
  )
}

WorkExperienceSection.propTypes = {}

export default WorkExperienceSection
