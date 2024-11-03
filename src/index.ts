import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import user from './routes/users.routes'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { options } from './utils/swaggerJsOptions'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

app.use(user)

export default app
