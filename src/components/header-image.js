import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"
import { theme } from "../../tailwind.config"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = props => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "lucas-davies-uxIU0kYGu-k-unsplash w2000.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(
        relativePath: { eq: "lucas-davies-uxIU0kYGu-k-unsplash w3000.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(theme)
  // Set up the array of image data and `media` keys.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag="div"
      fluid={sources}
      css={css`
        height: 300px;
        z-index: -1;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: scroll;
        @media screen and (min-width: 800px) {
          height: 600px;
        }
      `}
      {...props}
    />
  )
}

export default Image
//
