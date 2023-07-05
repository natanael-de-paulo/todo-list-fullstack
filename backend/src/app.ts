import express from 'express'
import "dotenv/config"
import cors from './libs/cors'

export const app = express()

app.use(cors)

