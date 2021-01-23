import React from "react"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

// TODO make margins reusable as props

const SocialLinks = ({ ...rest }) => {
  return (
    <ul
      className="mb-4 flex justify-center items-center flex-wrap sm:mb-0"
      {...rest}
    >
      <li className="mr-6">
        <a
          href="https://www.linkedin.com/in/kendy-nguyen-a51796a0/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin className="w-6 h-6 transition-colors hover:text-orange-400 hover:shadow-md active:text-orange-500 active:shadow-lg" />
        </a>
      </li>
      <li className="mr-6">
        <a
          href="http://github.com/sweetlikekendy/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithubSquare className="w-6 h-6 transition-colors hover:text-orange-400 hover:shadow-md active:text-orange-500 active:shadow-lg" />
        </a>
      </li>
      <li>
        <a
          href="mailto:kendyhnguyen1991@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MdEmail className="w-6 h-6 transition-colors hover:text-orange-400 hover:shadow-md active:text-orange-500 active:shadow-lg" />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
