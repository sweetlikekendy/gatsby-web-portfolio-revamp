import React from "react"
import BlockContent from "@sanity/block-content-to-react"
// import { css } from "@emotion/core"
import tw, { css } from "twin.macro"
import serializers from "./serializers"
import clientConfig from "../../client-config"

export default function PortableBlockContent({ blocks }) {
  return (
    <BlockContent
      tw="bg-red-100"
      // css={[tw`bg-red-100`]}
      css={css`
        p {
          ${tw`mb-4`}
        }
      `}
      blocks={blocks}
      serializers={serializers}
      imageOptions={{ w: 320, h: 240, fit: "max" }}
      {...clientConfig.sanity}
    />
  )
}
