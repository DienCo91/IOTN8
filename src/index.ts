import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import user from './routes/users.routes'
import health from './routes/healths.routes'
import chat from './routes/chats.routes'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { options } from './utils/swaggerJsOptions'
import { handleErrorGlobal } from './utils/handleErrorGlobal'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

app.use('/user', user)
app.use('/health', health)
app.use('/chat', chat)

app.use(handleErrorGlobal)

export default app
