/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../client-config.js"
import tw, { css } from "twin.macro"

export default function Figure({ node }) {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 800 },
    clientConfig.sanity
  )
  return (
    <figure
      css={css`
        ${tw`mx-auto`}
      `}
    >
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
