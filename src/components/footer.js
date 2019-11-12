import React from "react"
import PropTypes from "prop-types"
import SocialLinks from "./social-links"
import { css } from "@emotion/core"
import { colors, pageWidth } from "../styles/theme"
import DecorativeHorizontalBar from "./decorative-horizontal-bar"

const Footer = props => {
  return (
    <div
      css={css`
        padding-top: 5rem;
      `}
    >
      <DecorativeHorizontalBar />
      <footer
        css={css`
          background-color: ${colors.textPrimaryBodyColor};
          color: ${colors.formBgColor};
          padding: 1.25rem 1rem;
        `}
      >
        <div
          className="inner"
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <SocialLinks
            fill={colors.textPrimaryBodyColor}
            outline={colors.navTextColor}
            dimension="20"
            hoverColor={colors.linkColor}
          />
          <p>Copyright © Kendy Nguyen</p>
        </div>
      </footer>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
