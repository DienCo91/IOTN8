import { NextFunction, Request, Response } from 'express'

import Healths from '~/models/database/Healths'
import Persons from '~/models/database/Persons'
import { CustomError } from '~/utils/CustomError'

export const getHealth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user_id = req.params.user_id
    if (!user_id) next(new CustomError('Not Found', 404))
    const health = await Healths.find({ person_id: user_id })
    if (!health) next(new CustomError('Not Found', 404))
    res.status(200).json({ health })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

export const postHealth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user_id = req.body.person_id
    if (!user_id) next(new CustomError('Not Found', 404))
    const user = await Persons.findById(user_id)

    if (user) {
      const health = await Healths.create(req.body)
      user.list_health.push(health._id)
      await user.save()
      res.status(200).json({ health })
    }
    next(new CustomError('Not Found', 404))
  } catch (error) {
    res.status(400).json({ error })
  }
}
