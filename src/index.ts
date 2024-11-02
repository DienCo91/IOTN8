import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import user from './routes/users.routes'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(user)

export default app
