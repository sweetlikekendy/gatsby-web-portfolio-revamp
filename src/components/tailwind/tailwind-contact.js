import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { PrimaryButton, StyledLink } from "../../styles"

export default function Contact() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blueGray-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="flex items-center bg-blueGray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-blueGray-900 sm:text-3xl">
              Ready to connect?
            </h2>
            <p className="mt-3 text-lg leading-6 text-blueGray-500">
              Leave me a message on right or click on the link below!
            </p>
            <dl className="mt-8 text-base text-blueGray-500">
              <div className="mt-6">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <AiOutlineMail className="h-6 w-6" />
                  <a
                    className="ml-3"
                    href="mailto:kendyhnguyen1991@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledLink>kendyhnguyen1991@gmail.com</StyledLink>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label for="full_name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autocomplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                  placeholder="Full name"
                />
              </div>
              <div>
                <label for="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                  placeholder="Phone"
                />
              </div>
              <div>
                <label for="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  // className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium  text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <PrimaryButton>Submit</PrimaryButton>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
