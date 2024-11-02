import app from '.'

import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, process.env.ENVFILE || '') })

process.on('uncaughtException', (error: Error) => {
  console.log('🚀 ~ process.on ~ error:', error.message, error.name)
  server.close(() => {
    process.exit(1)
  })
})

const server = app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

process.on('unhandledRejection', (error: Error) => {
  console.log('🚀 ~ unhandledRejection ~ error:', error.name)
  server.close(() => {
    process.exit(1)
  })
})
