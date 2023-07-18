function validationInvalidEmail(nome, value) {
  const element = document.getElementsByName(nome)[1]
  const message = 'E-mail inválido'

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return
  }

  inputValidationFails.push({
    name: nome,
    error: message
  })

  element.textContent = message
}

function validationNotNull({
  inputName,
  value,
  inputElement,
  enabledInputDisabled = true
}) {
  let element
  const message = 'Este campo é obrigatório'

  element = inputElement

  if (!inputElement) {
    element = document.getElementsByName(inputName)[0]
  }

  const elementDisabled = element.getAttribute('disabled')

  if (enabledInputDisabled || (!enabledInputDisabled && !elementDisabled)) {
    const errorElement = element.nextElementSibling

    if (typeof value === 'string' && value) {
      return
    }

    inputValidationFails.push({
      name: inputName,
      error: message
    })

    errorElement.textContent = message
  }
}
