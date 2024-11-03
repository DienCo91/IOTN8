import express from 'express'
import { helloUser, signIn } from '~/controllers/users.controllers'

const router = express.Router()

router.get('/', helloUser)
router.post('/sign-in', signIn)

export default router
