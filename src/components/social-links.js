import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import LinkedinIcon from "./svgs/linkedin-icon"
import GithubIcon from "./svgs/github-icon"
import EnvelopeIcon from "./svgs/envelope-icon"
import ResumeIcon from "./svgs/resume-icon"

// TODO make margins reusable as props

const SocialLinks = ({
  fill,
  outline,
  dimension,
  hoverColor,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  return (
    <ul
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li {
          margin-right: 2rem;
          a {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
        li:last-of-type {
          margin-right: 0;
        }
        .github-icon {
          margin-right: 0;
        }
      `}
    >
      <li>
        <Link to="/">
          <LinkedinIcon
            fill={fill}
            outline={outline}
            dimension={dimension}
            hoverColor={hoverColor}
          />
        </Link>
      </li>
      <li>
        <Link to="/">
          <GithubIcon
            fill={outline}
            dimension={dimension}
            hoverColor={hoverColor}
          />
        </Link>
      </li>
      <li>
        <Link to="/">
          <EnvelopeIcon
            fill={outline}
            dimension={dimension}
            hoverColor={hoverColor}
          />
        </Link>
      </li>
      <li>
        <Link to="/">
          <ResumeIcon
            fill={outline}
            dimension={dimension}
            hoverColor={hoverColor}
          />
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
