import React from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="bg-blueGray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="http://github.com/sweetlikekendy/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blueGray-500 hover:text-blue-600 active:text-blue-700"
          >
            <span className="sr-only">GitHub</span>
            <AiFillGithub className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/kendy-nguyen-a51796a0/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blueGray-500 hover:text-blue-600 active:text-blue-700"
          >
            <span className="sr-only">LinkedIn</span>
            <AiFillLinkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:kendyhnguyen1991@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blueGray-500 hover:text-blue-600 active:text-blue-700"
          >
            <span className="sr-only">Facebook</span>
            <AiOutlineMail className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-blueGray-500">
            &copy; {year} Kendy Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
