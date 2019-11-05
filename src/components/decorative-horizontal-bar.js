import React from "react"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"

const DecorativeHorizontalBar = () => {
  return (
    <div
      css={css`
        background-color: ${colors.primaryColor};
        width: 100%;
        height: 1rem;
      `}
    ></div>
  )
}

export default DecorativeHorizontalBar
