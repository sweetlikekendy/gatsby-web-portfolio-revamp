import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineMail } from "react-icons/ai"
import { PrimaryButton, StyledLink } from "../../styles"
import DisabledButton from "../../styles/disabled-button"

export default function Contact() {
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [message, setMessage] = useState("Nothing to report!")
  // const onSubmit = data => {
  //   setIsSubmitting(true)
  //   fetch("/.netlify/functions/contact", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       setMessage(response.message)
  //       setIsSubmitting(false)
  //     })
  //     .catch(error => {
  //       // TODO test offline, remove console.log
  //       // console.log({ error })
  //       if (error.message === "Unexpected token < in JSON at position 0") {
  //         setMessage("Uh oh! Something went wrong. Please try again later.")
  //         setIsSubmitting(false)
  //         return
  //       }
  //       if (error.message === "Failed to fetch") {
  //         setMessage(
  //           "Uh oh! Something went wrong. It may be your internet connection."
  //         )
  //         setIsSubmitting(false)
  //         return
  //       }
  //       setMessage(error.message)
  //       setIsSubmitting(false)
  //     })
  // }

  // const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

  // const onSubmit = data => {
  //   wait(3000)
  //     .then(() => {
  //       setIsSubmitting(true)
  //       console.log(data)
  //     })
  //     .then(() => {
  //       setIsSubmitting(false)
  //     })
  //     .catch(error => console.log(error))
  // }
  const { register, handleSubmit, errors, formState } = useForm()

  return (
    <div className="relative bg-white lg:mt-16">
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
            <form
              action="/success"
              method="POST"
              // onSubmit={handleSubmit(onSubmit)}
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <fieldset
                // disabled={isSubmitting || formState.submitCount >= 10}
                className="grid grid-cols-1 gap-y-6"
              >
                {/* <p>Message: {message}</p> */}
                {/* <p>Submissions: {formState.submitCount}</p> */}
                <div>
                  <label htmlFor="full_name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                    placeholder="Full name"
                    ref={register({ required: "Required" })}
                  />
                  {errors.full_name && (
                    <p className="mt-2 text-red-500">
                      {errors.full_name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                    placeholder="Email"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                    placeholder="Phone"
                    ref={register({ required: "Required" })}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block w-full shadow-sm py-3 px-4 placeholder-blueGray-500 focus:ring-blue-500 focus:border-blue-500 border-blueGray-300 "
                    placeholder="Message"
                    ref={register({ required: "Required" })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="hidden">
                  <label htmlFor="beartrap">Beartrap</label>
                  <textarea name="beartrap" ref={register()}></textarea>
                </div>
                <div>
                  <button type="submit">
                    <PrimaryButton>Submit</PrimaryButton>
                    {/* {isSubmitting || formState.submitCount >= 10 ? (
                      <DisabledButton>Submit</DisabledButton>
                    ) : (
                      <PrimaryButton>Submit</PrimaryButton>
                    )} */}
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
