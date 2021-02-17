import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import serializers from "./serializers"
import clientConfig from "../../client-config"

export default function PortableBlockContent({ blocks }) {
  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      imageOptions={{ w: 320, h: 240, fit: "max" }}
      {...clientConfig.sanity}
    />
  )
}
