import { Field, reduxForm } from 'redux-form'
import { FormThemeProvider } from '@react-md/form'
import { Button } from "@react-md/button"

import renderField from '../../../utils/components/renderField'
import { Wrapper, Wrapper2, TextH1 } from './styles'
import { validateDob, validateEmail, validatePassword } from '../../../utils/functions/validator'
import { Grid, Text } from 'react-md'
import { Link } from 'react-router-dom'

const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (validateEmail(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (validatePassword(values.password)) {
    errors.password = "Must more than 8 characters, at least one uppercase letter, one lowercase letter and one number"
  }

  if (!values.rematchPassword) {
    errors.rematchPassword = 'Required'
  }

  if (values.rematchPassword !== values.password) {
    errors.rematchPassword = 'Password not matched'
  }

  if (!values.dob) {
    errors.dob = 'Please choose your birthday'
  } else if (!validateDob(values.dob)) {
    errors.dob = 'You must be greater than or equal 16 years old'
  }

  if (!values.address) {
    errors.address = 'Please enter your address'
  }

  return errors
}

let SignUpStep1Form = (props) => {
  const { handleSubmit } = props

  return (
    <Wrapper>
      <Wrapper2>
        <TextH1>Sign Up</TextH1>
        <Button id="text-button-list-all" theme="primary" themeType='outline'>
          <Link to='/list-all' style={{ textDecoration: 'none' }}>List Recruits</Link>
        </Button>
        <h3>Step 1</h3>
        <FormThemeProvider theme={"outline"}>
          <form onSubmit={handleSubmit}>
            <Field name="firstName" type="text" component={renderField} label="Firstname" />

            <Field name="lastName" type="text" component={renderField} label="Lastname" />

            <Field name="email" type="email" component={renderField} label="Email" />

            <Field name="password" type="password" component={renderField} label="Password" />

            <Field name="rematchPassword" type="password" component={renderField} label="Re-Enter Password" />

            <Field name="dob" type="date" component={renderField} label="DOB" />

            <Field name="address" type="text" component={renderField} label="Address" />

            <Text>Gender</Text>
            <Grid largeDesktopColumns={3} desktopColumns={3} tabletColumns={3} phoneColumns={1} style={{ paddingLeft: "0", paddingRight: "0", display: "flex", justifyContent: "space-around" }}>
              <div>
                <label>
                  <Field name="gender" component="input" type="radio" value="male" checked />Male
                </label>
              </div>
              <div>
                <label>
                  <Field name="gender" component="input" type="radio" value="female" />Female
                </label>
              </div>
              <div>
                <label>
                  <Field name="gender" component="input" type="radio" value="other" />Other
                </label>
              </div>
            </Grid>

            <Button type="submit" id="contained-button-2" theme="primary" themeType="contained" style={{ float: "right" }}>Next</Button>
          </form>
        </FormThemeProvider>
      </Wrapper2>
    </Wrapper>
  )
}

SignUpStep1Form = reduxForm({
  form: 'signUp',
  validate
})(SignUpStep1Form)

export default SignUpStep1Form