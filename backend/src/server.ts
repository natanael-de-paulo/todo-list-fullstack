import app from './app'

const hostname = process.env.SERVER_HOST || 'localhost'
const port = Number(process.env.SERVER_PORT) || 3001

app.listen(port, hostname, () => {
  console.log(`server is listening on ${hostname}:${port}`)
})