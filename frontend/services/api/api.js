const baseUrl = 'http://localhost:3001/v1/users'
const token = localStorage.getItem('token')
const headersSecurity = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
})

const headersBasic = new Headers({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*'
})
