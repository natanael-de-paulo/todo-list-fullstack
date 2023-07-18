const form = document.getElementById('login-form')

let inputValidationFails = []

form.addEventListener('submit', async event => {
  event.preventDefault()
  inputValidationFails = []

  const { email, password } = form

  clearAllValidations()

  validationInvalidEmail('email', email.value)

  validationNotNull({
    inputName: 'email',
    value: email.value
  })

  validationNotNull({
    inputName: 'password',
    value: password.value
  })

  if (inputValidationFails.length > 0) {
    console.log(inputValidationFails)
    return
  }

  const credentials = { email: email.value, password: password.value }

  const response = await auth(credentials)
  if (response) {
    localStorage.setItem('token', response.token)
  }

  return
})
