import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import LinkedinIcon from "./svgs/linkedin-icon"
import GithubIcon from "./svgs/github-icon"
import EnvelopeIcon from "./svgs/envelope-icon"
import ResumeIcon from "./svgs/resume-icon"

const SocialLinks = ({ fill, outline, dimension }) => {
  return (
    <ul
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          margin: 0 1rem;
          a {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}
    >
      <li>
        <Link to="/">
          <LinkedinIcon fill={fill} outline={outline} dimension={dimension} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <GithubIcon fill={outline} dimension={dimension} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <EnvelopeIcon fill={outline} dimension={dimension} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <ResumeIcon fill={outline} dimension={dimension} />
        </Link>
      </li>
    </ul>
  )
}

// Fill color, outline color, square dimensions (width x height)
SocialLinks.propTypes = {
  fill: PropTypes.string,
  outline: PropTypes.string,
  dimension: PropTypes.number,
}

export default SocialLinks
