import React from "react"

export default function Form() {
  return (
    <section className="text-blueGray-700 body-font">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-blueGray-900 sm:text-4xl">
          Ready to Connect?
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-blueGray-500 sm:mt-4">
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
      <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
        <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <div className="relative ">
            <label for="email" className="text-sm leading-7 text-blueGray-600">
              Email
            </label>
            <input
              type="email"
              id="v"
              name="email"
              placeholder="email"
              className="w-full px-4 py-2 mb-4 mr-4 text-base text-blue-700 bg-blueGray-100 border-transparent rounded-lg focus:border-blueGray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div className="relative ">
            <label for="name" className="text-sm leading-7 text-blueGray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="name"
              className="w-full px-4 py-2 mb-4 mr-4 text-base text-blue-700 bg-blueGray-100 border-transparent rounded-lg focus:border-blueGray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div className="relative mb-4 ">
            <label className="block ">
              <label
                for="email"
                className="text-sm leading-7 text-blueGray-600"
              >
                Choose
              </label>
              <select className="block w-full px-4 py-2 bg-blueGray-100 border-transparent rounded-lg focus:border-blueGray-500 focus:bg-white focus:ring-0">
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <div className="relative ">
            <textarea
              type="message"
              id="message"
              name="message"
              placeholder="message"
              className="w-full px-4 py-2 mb-4 mr-4 text-base text-blue-700 bg-blueGray-100 border-transparent rounded-lg focus:border-blueGray-500 focus:bg-white focus:ring-0"
            ></textarea>
          </div>
          <button className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:ring focus:outline-none">
            Button
          </button>
        </div>
      </div>
    </section>
  )
}
