import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"
import SocialLinks from "./social-links"

const Hero = props => {
  return (
    <div
      css={css`
        z-index: 2;
        width: 800px;
        height: 300px;
        margin: -150px auto 210px;
        background-color: #fff;
        border: 1px solid ${colors.formBgColor};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div
        className="about-me"
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
          platea dictumst vestibulum rhoncus est pellentesque. lacus vel.{" "}
        </p>
      </div>
      <div
        className="bottom-about-me"
        css={css`
          background-color: ${colors.formBgColor};
          height: 70px;
          padding: 1rem;
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
          dimension={25}
        />
      </div>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
