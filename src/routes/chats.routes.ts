import express from 'express'
import { getMessage } from '~/controllers/chats.controllers'

const router = express.Router()

router.get('/', getMessage)

export default router
