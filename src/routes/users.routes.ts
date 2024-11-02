import express from 'express'
import { helloUser } from '~/controllers/users.controllers'

const router = express.Router()

router.get('/', helloUser)

export default router
