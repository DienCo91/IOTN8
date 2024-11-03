import { Request, Response } from 'express'
import Persons from '~/models/database/Persons'
import { MongoError } from '~/types/types'

export const helloUser = async (req: Request, res: Response): Promise<void> => {
  const persons = await Persons.find()
  res.status(200).json(persons)
}

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const person = await Persons.create(req.body)
    res.status(200).json(person)
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error) {
      const mongoError = error as MongoError

      if (mongoError.code === 11000 && mongoError.keyPattern) {
        const field = Object.keys(mongoError.keyPattern)[0]
        let message: string

        switch (field) {
          case 'username':
            message = 'Tên người dùng đã tồn tại, vui lòng chọn tên khác.'
            break

          case 'fullname':
            message = 'Tên đầy đủ đã tồn tại, vui lòng chọn tên khác.'
            break

          default:
            message = 'Có lỗi xảy ra, vui lòng thử lại sau.'
        }

        res.status(400).json({ message })
      }
    }

    res.status(400).json({ error })
  }
}
