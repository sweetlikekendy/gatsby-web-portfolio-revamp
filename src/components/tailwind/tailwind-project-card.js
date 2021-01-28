import React from "react"
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai"
import { PrimaryButton, SecondaryButton } from "../../styles"

export default function ProjectCard({
  description,
  imgAlt,
  imgSrc,
  type,
  title,
  ...rest
}) {
  return (
    <div class="flex flex-col shadow-lg overflow-hidden" {...rest}>
      {imgSrc && (
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src={imgSrc} alt={imgAlt} />
        </div>
      )}
      {type && title && description && (
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-blue-600">{type}</p>

            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">{title}</p>
              <p class="mt-3 text-base text-gray-500">{description}</p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-1 mt-5 flex flex-col sm:flex-row sm:justify-start lg:flex-col xl:flex-row">
              <a href="#" className=" ">
                <PrimaryButton isSmall>
                  View demo <AiFillPlayCircle className="ml-2" />
                </PrimaryButton>
              </a>
              <a
                href="#"
                class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0 xl:mt-0 xl:ml-3"
              >
                <SecondaryButton isSmall>
                  Source code
                  <AiFillGithub className="ml-2" />
                </SecondaryButton>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
