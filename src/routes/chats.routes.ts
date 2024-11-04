import express from 'express'
import { createChat, getChats, getMessageInChat, postMessage } from '~/controllers/chats.controllers'

const router = express.Router()

router.get('/', getChats)
router.get('/:chat_id', getMessageInChat)
router.post('/message', postMessage)
router.post('/create', createChat)

export default router
