let securityUrl = 'http://localhost:3001/v1/security/auth'

async function auth(data) {
  try {
    const response = await fetch(securityUrl, {
      headers: headersBasic,
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => response.json())

    return response
  } catch (error) {
    console.log(error)
  }
}
