import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import cors from './libs/cors'
import { routes } from './infra/http/routes/index'
import { AppError } from './infra/http/middlewares/app-error'
import rateLimit from './libs/express-rate-limite'

const app = express()

app.use(express.json());
app.use(cors)
app.use(rateLimit)
app.use('/v1', routes)
app.use(AppError)

export default app