import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import LinkedinIcon from "./svgs/linkedin-icon"
import GithubIcon from "./svgs/github-icon"
import EnvelopeIcon from "./svgs/envelope-icon"

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
        <a
          href="https://www.linkedin.com/in/kendy-nguyen-a51796a0/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedinIcon
            fill={fill}
            outline={outline}
            dimension={dimension}
            hoverColor={hoverColor}
          />
        </a>
      </li>
      <li>
        <a
          href="http://github.com/sweetlikekendy/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon
            fill={outline}
            dimension={dimension}
            hoverColor={hoverColor}
          />
        </a>
      </li>
      <li>
        <a
          href="mailto:kendyhnguyen1991@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <EnvelopeIcon
            fill={outline}
            dimension={dimension}
            hoverColor={hoverColor}
          />
        </a>
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
