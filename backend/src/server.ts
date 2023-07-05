import { server } from "./app"

const port = process.env.SERVER_PORT || 3001

server.listen(port, () => console.log(`server is listening on ${port}`))