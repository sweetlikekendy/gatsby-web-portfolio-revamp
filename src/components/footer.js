import React from "react"
import SocialLinks from "./social-links"
import { css } from "@emotion/core"
import { colors, pageWidth } from "../styles/theme"
import DecorativeHorizontalBar from "./decorative-horizontal-bar"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

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
          css={css`
            max-width: ${pageWidth};
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: 500px) {
              flex-direction: column;
              ul {
                margin-bottom: 2rem;
              }
              p {
                text-align: center;
              }
            }
          `}
        >
          <SocialLinks
            fill={colors.textPrimaryBodyColor}
            outline={colors.navTextColor}
            dimension={parseInt(20)}
            hoverColor={colors.linkColor}
          />
          <p>© {year} Kendy Nguyen</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
