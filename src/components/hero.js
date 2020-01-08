import React from "react"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"
import SocialLinks from "./social-links"

// TODO Make this responsive

const Hero = () => {
  return (
    <div
      css={css`
        z-index: 2;
        max-width: 800px;
        margin: -150px auto 210px;
        background-color: #fff;
        border: 1px solid ${colors.formBgColor};
      `}
    >
      <div
        className="top-about-me"
        css={css`
          height: 100%;
          padding: 2rem 1rem;
          h2 {
            text-align: center;
            margin-bottom: 1rem;
          }

          p {
            padding: 1rem 4rem;
            line-height: 1.7;
          }
        `}
      >
        <h2>Hi! My name is Kendy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna a liqua. Tortor
          dignissim convallis aenean et tortor at risus viverra. Hac habitasse
          platea dictumst vestibulum rhoncus est pellentesque. lacus vel.
        </p>
      </div>
      <div
        className="bottom-about-me"
        css={css`
          background-color: ${colors.formBgColor};
          height: 70px;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <SocialLinks
          css={css`
            svg {
              width: 25px;
            }
          `}
          fill={colors.formBgColor}
          outline={colors.textPrimaryBodyColor}
          dimension={parseInt(25)}
          hoverColor={colors.linkColor}
        />
      </div>
    </div>
  )
}

export default Hero
