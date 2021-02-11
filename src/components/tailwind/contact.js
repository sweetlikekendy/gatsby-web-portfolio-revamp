import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlineMail,
} from "react-icons/ai"
import { PrimaryButton, StyledLink } from "../../styles"

export default function Contact() {
  const [message, setMessage] = useState("Nothing to report!")
  const [isErrorAlert, setErrorAlert] = useState(false)
  const [isSuccessAlert, setSuccessAlert] = useState(false)

  const { register, handleSubmit, errors, formState, reset } = useForm()

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = (formData, event) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-me", ...formData }),
    })
      .then(response => {
        const { status } = response

        switch (status) {
          case 200:
            setSuccessAlert(true)
            setMessage(
              "Thank you for reaching to me 😁 I will reply to your message ASAP."
            )
            reset()
            break
          case 400:
            setErrorAlert(true)
            setMessage(
              "Hmm...unable to send your message. Double check the form and try again. If this error message shows up again, please try again later."
            )
            break
          case 404:
            setErrorAlert(true)
            setMessage("The server cannot be found! Please try again later.")
            break
        }
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    event.preventDefault()
  }

  return (
    // Remove negative margin if you use this form and it's not on the bottom on top of the footer
    <div className="relative bg-white lg:mt-16 -mb-10 sm:-mb-12 lg:-mb-16">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blueGray-50"></div>
      </div>
      <div className="relative max-w-6xl mx-auto lg:grid lg:grid-cols-5">
        <div className="flex items-center bg-blueGray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-16 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-normal text-blueGray-900 sm:text-3xl">
              Ready to connect?
            </h2>
            <p className="mt-3 text-lg leading-6 text-blueGray-500">
              Leave me a message by filling out the form or click on my email
              address!
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
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-16 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              // action="/success"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              name="contact-me"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              disabled={formState.isSubmitting}
            >
              {isErrorAlert && (
                <div className="rounded-md bg-red-50 p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <AiFillCloseCircle className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          {message}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                      <button onClick={() => setErrorAlert(!isErrorAlert)}>
                        <AiOutlineClose className="h-5 w-5 text-red-800 " />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {isSuccessAlert && (
                <div className="rounded-md bg-green-50 p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AiFillCheckCircle className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                          {/* Order completed */}
                          {message}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                      <button onClick={() => setSuccessAlert(!isSuccessAlert)}>
                        <AiOutlineClose className="h-5 w-5 text-green-800 " />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <fieldset
                // disabled={isSubmitting || formState.submitCount >= 10}
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full_name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autoComplete="name"
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
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
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
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
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Phone"
                    ref={register({ required: "Required" })}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="tel"
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
                    placeholder="Subject"
                    ref={register({ required: "Required" })}
                  />
                  {errors.subject && (
                    <p className="mt-2 text-red-500">
                      {errors.subject.message}
                    </p>
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
                    className="block text-blueGray-600 w-full shadow-sm rounded-md py-3 px-4 placeholder-blueGray-500 border-blueGray-300 focus:placeholder-blueGray-400 focus:ring-blue-500 focus:border-blue-500  "
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
                  <label htmlFor="trap-card">
                    Don't activate this bot trap card by filling this input if
                    you're human
                  </label>
                  <textarea name="trap-card" ref={register()}></textarea>
                </div>
                <div>
                  <button type="submit">
                    <PrimaryButton>Submit</PrimaryButton>
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
