import React from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-6 md:order-2">
          <a
            href="#"
            class="text-gray-400 hover:text-blue-600 active:text-blue-700"
          >
            <span class="sr-only">Facebook</span>
            <AiFillGithub class="h-6 w-6" />
          </a>

          <a
            href="#"
            class="text-gray-400 hover:text-blue-600 active:text-blue-700"
          >
            <span class="sr-only">Instagram</span>
            <AiFillLinkedin class="h-6 w-6" />
          </a>
          <a
            href="#"
            target="_blank"
            class="text-gray-400 hover:text-blue-600 active:text-blue-700"
          >
            <span class="sr-only">Facebook</span>
            <AiOutlineMail class="h-6 w-6" />
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base text-gray-400">
            &copy; {year} Kendy Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
