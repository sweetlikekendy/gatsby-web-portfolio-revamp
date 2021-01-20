import React from "react"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"
import SocialLinks from "./social-links"

const Hero = () => {
  return (
    <div
      css={css`
        z-index: 2;
        max-width: 800px;
        margin: -150px auto 210px;
        background-color: #fff;
        border: 1px solid ${colors.formBgColor};

        @media screen and (max-width: 800px) {
          margin: 1rem;
          /* padding: 1rem; */
        }
      `}
    >
      <div
        className="top-about-me"
        css={css`
          height: 100%;
          padding: 2rem 1rem;
          h2 {
            text-align: center;
            letter-spacing: 1.5px;
            margin-bottom: 1rem;
          }

          p {
            padding: 1rem 4rem;
            line-height: 1.7;
            letter-spacing: 1px;
          }
          @media screen and (max-width: 375px) {
            h2 {
              text-align: left;
            }
            p {
              padding: 1rem 0;
            }
          }
        `}
      >
        <h2 className="text-2xl font-medium">Hi! My name is Kendy</h2>
        <p>
          I am a web developer based in San Diego, CA. My work experiences come
          from freelancing for small businesses. I've dealt with Shopify stores,
          and building small static sites with a static site generator such as{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">Gatsby</span>
          </a>
          . My goal is to help small businesses increase their online presence
          by building fast and responsive websites with a mobile-first
          mentality!
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
