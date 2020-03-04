import React, { useState } from "react"

const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    // callback()
  }
  const handleInputChange = event => {
    event.persist()
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  const clearInput = event => {
    event.preventDefault
    console.log(...inputs)
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: "empty",
    }))
  }
  return { handleSubmit, handleInputChange, clearInput, inputs }
}

export default useSignUpForm
