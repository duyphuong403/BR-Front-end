const validatePassword = (value) => (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value))

const validateEmail = (value) => (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))

const validateDob = (value) => {
  const differentMillisecond = Date.now() - new Date(value).getTime()
  const age = new Date(differentMillisecond)

  return Math.abs(age.getUTCFullYear() - 1970) >= 16
}

export {
  validateEmail,
  validatePassword,
  validateDob
}