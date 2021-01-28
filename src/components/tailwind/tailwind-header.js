import React, { useState } from "react"
import { PrimaryButton } from "../../styles"

export default function Header() {
  const [open, setOpen] = useState(false)
  const handleMobileMenuToggle = () => setOpen(!open)
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:space-x-10 xl:px-0">
          <div>
            <a href="#" className="flex">
              <span className="sr-only">KN</span>
              <p className="text-3xl font-bold text-blue-700 tracking-wider md:text-4xl lg:text-5xl">
                KN
              </p>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => handleMobileMenuToggle()}
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="flex space-x-10 hidden md:block">
            <div className="flex items-center md:ml-12">
              <a
                href="#"
                className="text-base font-medium text-gray-500 px-4 py-2 hover:text-blue-600 active:text-blue-700"
              >
                Portfolio
              </a>
              <a
                href="mailto:kendyhnguyen1991@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-8 inline-flex items-center justify-center "
              >
                <PrimaryButton isSmall> Contact me </PrimaryButton>
              </a>
            </div>
          </nav>
        </div>
        {/* <!-- 
      Mobile menu, show/hide based on mobile menu state. Entering: "duration-200
      ease-out" From: "opacity-0 scale-95" To: "opacity-100 scale-100" Leaving:
      "duration-100 ease-in" From: "opacity-100 scale-100" To: "opacity-0
      scale-95" --> */}
        {open && (
          <div className="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      onClick={() => handleMobileMenuToggle()}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* <!-- Heroicon name: x --> */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Projects
                      </div>
                    </a>

                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Contact
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
