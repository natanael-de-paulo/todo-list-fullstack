import http from 'http'
import "dotenv/config"

export const server = http.createServer((req, res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' })
  res.end(`Cannot ${req.method} ${req.url}`)
})