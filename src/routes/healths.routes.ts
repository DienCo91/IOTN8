import express from 'express'
import { getHealth, postHealth } from '~/controllers/healths.controllers'

const router = express.Router()

router.get('/:user_id', getHealth)
router.post('/', postHealth)

export default router
