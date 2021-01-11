import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setUser } from '../../../stores/slices/user'

import SignUpStep1Form from './SignUnStep1Form'

const SignUpStep1Screen = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    document.title = 'BR | Sign Up - Step 1'
  }, [])

  const handleSubmit = async (values) => {
    try {
      let gender = ''
      if (!values.gender) {
        gender = 'male'
      } else {
        gender = values.gender
      }

      const data = {
        FirstName: values.firstName,
        LastName: values.lastName,
        Email: values.email,
        Password: values.password,
        Dob: values.dob,
        Address: values.address,
        Gender: gender
      }

      fetch('http://localhost:5000/user/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json())
        .then(result => {
          if ('error' in result) { return alert(result.error) }

          if (result.status === 200) {
            const user = {
              token: result.data
            }

            dispatch(setUser(user))
            return history.push('/sign-up-step-2')
          }
        })
        .catch(error => alert(error))

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <SignUpStep1Form onSubmit={handleSubmit} />
  )
}

export default SignUpStep1Screen
