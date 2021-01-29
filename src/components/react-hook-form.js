import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
  Select,
  Textarea,
  VisuallyHidden,
  Box,
} from "@chakra-ui/react"

export default function ReactHookForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("Nothing to report!")
  const onSubmit = data => {
    setIsSubmitting(true)
    console.log(formState.submitCount)
    if (formState.submitCount >= 10) {
      return setMessage(
        "Whoa there! You've tried contact me over tens times already! Max submission count is 10 :)"
      )
    }
    fetch("/.netlify/functions/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => {
        setMessage(response.message)
        setIsSubmitting(false)
      })
      .catch(error => {
        // TODO test offline, remove console.log
        console.log({ error })
        if (error.message === "Unexpected token < in JSON at position 0") {
          setMessage("Uh oh! Something went wrong. Please try again later.")
          setIsSubmitting(false)
          return
        }
        if (error.message === "Failed to fetch") {
          setMessage(
            "Uh oh! Something went wrong. It may be your internet connection."
          )
          setIsSubmitting(false)
          return
        }
        setMessage(error.message)
        setIsSubmitting(false)
      })
  }

  const { register, handleSubmit, errors, formState } = useForm()

  return (
    <Box
      p={{ base: 6, md: 8 }}
      m={10}
      color="gray.900"
      maxW="md"
      boxShadow="xs"
      borderRadius="sm"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Message: {message}</p>
        <p>Submissions: {formState.submitCount}</p>
        {/* Form will automatically disable without warning after the 10th submit */}
        <fieldset disabled={isSubmitting || formState.submitCount >= 10}>
          <h1>Sign Up</h1>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">First name*</FormLabel>
            <Input
              name="name"
              type="name"
              placeholder="Bruce Wayne"
              ref={register({ required: "Required" })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              placeholder="bruce@wayneenterprises.com"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.subject}>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Select
              name="subject"
              placeholder="Select..."
              ref={register({ required: "Required" })}
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Schedule Consultation">
                Schedule Consultation
              </option>
            </Select>
            <FormErrorMessage>
              {errors.subject && errors.subject.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.body}>
            <FormLabel htmlFor="body">Message</FormLabel>
            <Textarea
              name="body"
              ref={register({ required: "Required" })}
            ></Textarea>
            <FormErrorMessage>
              {errors.body && errors.body.message}
            </FormErrorMessage>
          </FormControl>
          <VisuallyHidden>
            <FormLabel htmlFor="beartrap">Beartrap</FormLabel>
            <Textarea name="beartrap" ref={register()}></Textarea>
          </VisuallyHidden>

          <Button isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </fieldset>
      </form>
    </Box>
  )
}

// ! isSubmitting available in formState is unreliable for our purposes, so we use our own in a useState hook
