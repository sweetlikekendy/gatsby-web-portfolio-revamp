import React from "react"
import Img from "gatsby-image"
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai"
import { PrimaryButton, SecondaryButton } from "../../styles"

export default function ProjectCard({
  demoLink,
  description,
  imgAlt,
  imgSrc,
  repoLink,
  type,
  title,
  ...rest
}) {
  console.log(imgSrc)
  return (
    <div className="flex flex-col shadow-lg overflow-hidden" {...rest}>
      {imgSrc ? (
        <Img
          // className="object-cover object-50%-50%"
          fluid={{
            ...imgSrc.childImageSharp.fluid,
            aspectRatio: 4 / 3,
          }}
          // objectFit="cover"
          // objectPosition="50% 50%"
          alt={imgAlt}
        />
      ) : (
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="http://via.placeholder/400/300"
            alt={imgAlt}
          />
        </div>
      )}
      {type && title && description && (
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-600">{type}</p>

            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{description}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-1 mt-5 flex flex-col sm:flex-row sm:justify-start lg:flex-col xl:flex-row">
              {demoLink && (
                <a href="#" className=" ">
                  <PrimaryButton isSmall>
                    View demo <AiFillPlayCircle className="ml-2" />
                  </PrimaryButton>
                </a>
              )}
              {repoLink && (
                <a
                  href="#"
                  className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0 xl:mt-0 xl:ml-3"
                >
                  <SecondaryButton isSmall>
                    Source code
                    <AiFillGithub className="ml-2" />
                  </SecondaryButton>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
