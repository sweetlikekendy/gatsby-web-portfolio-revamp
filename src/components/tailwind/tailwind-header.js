import React, { useState } from "react"
import { PrimaryButton } from "../../styles"

export default function Header() {
  const [open, setOpen] = useState(false)
  const handleMobileMenuToggle = () => setOpen(!open)
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div class="flex justify-between items-center px-4 py-6 sm:px-6  md:space-x-10">
          <div>
            <a href="#" class="flex">
              <span class="sr-only">KN</span>
              <p className="text-3xl font-bold text-blue-700 tracking-wider md:text-4xl lg:text-5xl">
                KN
              </p>
              {/* <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                alt=""
              /> */}
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => handleMobileMenuToggle()}
            >
              <span class="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg
                class="h-6 w-6"
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

          <nav class="flex space-x-10 hidden md:block">
            <div class="flex items-center md:ml-12">
              <a
                href="#"
                class="text-base font-medium text-gray-500 px-4 py-2 hover:text-gray-900"
              >
                Portfolio
              </a>
              <a
                href="mailto:kendyhnguyen1991@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-8 inline-flex items-center justify-center "
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
          <div class="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      onClick={() => handleMobileMenuToggle()}
                    >
                      <span class="sr-only">Close menu</span>
                      {/* <!-- Heroicon name: x --> */}
                      <svg
                        class="h-6 w-6"
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
                <div class="mt-6">
                  <nav class="grid gap-6">
                    <a
                      href="#"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div class="ml-4 text-base font-medium text-gray-900">
                        Projects
                      </div>
                    </a>

                    <a
                      href="#"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div class="ml-4 text-base font-medium text-gray-900">
                        Contact
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
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
