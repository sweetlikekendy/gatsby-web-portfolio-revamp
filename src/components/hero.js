import React from "react"
import { css } from "@emotion/core"
import { colors } from "../styles/theme"
import SocialLinks from "./social-links"

const Hero = () => {
  return (
    <div className="z-2 max-w-4xl bg-white border-2 border-blueGray-200 m-4 md:-mt-36 md:mb-52 mx-auto">
      <div className="h-full py-8 px-4">
        <h2 className="text-2xl font-medium text-left mb-4 sm:text-center">
          Hi! My name is Kendy
        </h2>
        <p className="py-4 px-0 leading-7 tracking-wider sm:px-16 ">
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
      <div className="h-16 p-4 bg-blueGray-200 flex justify-center items-center">
        <SocialLinks />
      </div>
    </div>
  )
}

export default Hero
