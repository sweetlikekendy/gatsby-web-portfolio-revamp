import React from "react"
import ProjectCard from "./tailwind-project-card"

export default function Projects() {
  return (
    // add bg color to here if you want it
    <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      {/* uncomment if you want white bg & 1/3 height */}
      {/* <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div> */}
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            My Portfolio
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            View my current & past personal projects/work I've done below.
          </p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            imgAlt=""
            type="Personal"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                    dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium."
          />
        </div>
      </div>
    </div>
  )
}
