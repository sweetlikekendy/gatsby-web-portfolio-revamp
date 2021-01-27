import React from "react"

export default function Form() {
  return (
    <section class="text-gray-700 body-font">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Ready to Connect?
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Please email me at{" "}
          <a
            href="mailto:kendyhnguyen1991@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            kendyhnguyen1991@gmail.com
          </a>{" "}
          or fill out the form below.
        </p>
      </div>
      <div class="container px-8 pt-24 pb-24 mx-auto lg:px-4">
        <div class="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <div class="relative ">
            <label for="email" class="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="v"
              name="email"
              placeholder="email"
              class="w-full px-4 py-2 mb-4 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div class="relative ">
            <label for="name" class="text-sm leading-7 text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="name"
              class="w-full px-4 py-2 mb-4 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div class="relative mb-4 ">
            <label class="block ">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Choose
              </label>
              <select class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <div class="relative ">
            <textarea
              type="message"
              id="message"
              name="message"
              placeholder="message"
              class="w-full px-4 py-2 mb-4 mr-4 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
            ></textarea>
          </div>
          <button class="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">
            Button
          </button>
        </div>
      </div>
    </section>
  )
}
