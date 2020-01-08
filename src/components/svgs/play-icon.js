import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const PlayIcon = ({ fill, dimension, hoverColor }) => {
  return (
    <svg
      css={css`
        width: ${dimension}px;
        height: ${dimension}px;
        margin-right: 0.75rem;
        &:hover {
          path:first-of-type {
            fill: ${hoverColor};
          }
        }
      `}
      viewBox="0 0 60 60"
    >
      <path
        fill={fill}
        d="M45.563 29.174l-22-15A1 1 0 0022 15v30a.999.999 0 001.563.826l22-15a1 1 0 000-1.652zM24 43.107V16.893L43.225 30z"
      />
      <path
        fill={fill}
        d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"
      />
    </svg>
  )
}

PlayIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  dimension: PropTypes.number.isRequired,
  hoverColor: PropTypes.string,
}

export default PlayIcon
