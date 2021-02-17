import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../client-config.js"
import "twin.macro"

export default function Figure({ node }) {
  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 800 },
    clientConfig.sanity
  )
  return (
    <figure className="mx-auto">
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
