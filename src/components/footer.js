import React from "react"
import SocialLinks from "./social-links"
import DecorativeHorizontalBar from "./decorative-horizontal-bar"
import { theme } from "../../tailwind.config"

const { colors } = theme

const Footer = props => {
  const date = new Date()
  const year = date.getFullYear()

  console.log(colors)
  return (
    <footer className="w-full mt-20" {...props}>
      <DecorativeHorizontalBar />
      <div className="bg-blueGray-800 text-blueGray-100 py-5 px-4">
        <div className="max-w-6xl my-0 mx-auto flex flex-col justify-center items-center sm:justify-between sm:flex-row">
          <SocialLinks />
          <p className="text-center sm:text-right">© {year} Kendy Nguyen</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
