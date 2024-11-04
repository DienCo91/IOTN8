import { Request, Response } from 'express'
import Chats from '~/models/database/Chat'
import Messages from '~/models/database/Messages'
import Persons from '~/models/database/Persons'
import { chatWithGPT } from '~/utils/chatWithGPT'

const chatBot_id = '6728e29d18d57ce0694f838f'

export const postMessage = async (req: Request, res: Response) => {
  const { prompt, user_id, chat_id } = req.body

  const msg_user = {
    content: prompt,
    person_id: user_id,
    chat_id
  }
  try {
    const messageUser = await Messages.create(msg_user)
    const chat = await Chats.findById(chat_id)
    if (chat) {
      chat.messages.push(messageUser._id)
      const response = await chatWithGPT(prompt)
      const messageChatBot = await Messages.create({
        content: response,
        person_id: chatBot_id,
        chat_id
      })
      chat.messages.push(messageChatBot._id)
      await chat.save()
      res.status(200).json({ data: [messageUser, messageChatBot] })
    } else {
      new Error()
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const createChat = async (req: Request, res: Response) => {
  const { user_id } = req.body
  const payload = {
    persons: [user_id, chatBot_id]
  }
  try {
    const chat = await Chats.create(payload)
    payload.persons.map(async (item) => {
      const user = await Persons.findById(item)
      if (user) {
        user.list_chat.push(chat._id)
        await user.save()
      }
    })
    res.status(200).json({ chat })
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

export const getChats = async (req: Request, res: Response) => {
  try {
    const chat = await Chats.find()
    res.status(200).json({ chat })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getMessageInChat = async (req: Request, res: Response) => {
  const { chat_id } = req.params
  try {
    const chat = await Chats.findById(chat_id).select('messages').populate('messages')
    res.status(200).json({ chat })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
