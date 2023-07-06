import express from 'express'
import "dotenv/config"
import cors from './libs/cors'
import { routes } from './infra/http/routes/index'

const app = express()

app.use(express.json());
app.use(cors)
app.use('/v1', routes)

export default app