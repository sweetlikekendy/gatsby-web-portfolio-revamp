import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const LinkedinIcon = ({ fill, outline, dimension }) => {
  return (
    <svg
      css={css`
        width: ${dimension}px;
        height: ${dimension}px;
        &:hover {
          transform: translateY(-2px);
        }
      `}
      viewBox={`0 0 129.58 129.57`}
    >
      <path
        d="M120 0H9.56A9.46 9.46 0 000 9.34v110.88a9.46 9.46 0 009.56 9.35H120a9.48 9.48 0 009.6-9.35V9.34A9.48 9.48 0 00120 0"
        fill={`${outline}`}
      />
      <g fill={`${fill}`}>
        <path d="M28.82 17.84A11.14 11.14 0 1117.68 29a11.14 11.14 0 0111.14-11.16zm-9.61 30.74h19.22v61.83H19.21zM50.48 48.58h18.44V57h.26c2.56-4.83 8.82-10 18.18-10 19.46 0 23 12.81 23 29.46v33.91H91.21V80.34c0-7.17-.13-16.39-10-16.39s-11.52 7.81-11.52 15.87v30.59H50.48z" />
      </g>
    </svg>
  )
}

LinkedinIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  outline: PropTypes.string.isRequired,
  dimension: PropTypes.number.isRequired,
}

export default LinkedinIcon
