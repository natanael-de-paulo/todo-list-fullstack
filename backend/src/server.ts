import app from './app'

const port = Number(process.env.SERVER_PORT) 

app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})