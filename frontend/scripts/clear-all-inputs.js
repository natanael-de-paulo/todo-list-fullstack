function clearAllValidations() {
  inputValidationFails = []

  const elements = document.getElementsByClassName('form-validation')

  for (let i = 0; elements.length >= i; i++) {
    const elements = document.querySelectorAll('p')

    elements.forEach(e => {
      if (e.getAttribute('class') === 'form-validation') {
        e.textContent = ''
      }
    })
  }
}
