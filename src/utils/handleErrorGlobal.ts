import { NextFunction, Response, Request } from 'express'
import { CustomError } from '~/types/types'

const devError = (error: CustomError, res: Response) => {
  return res.status(error?.statusCode || 500).json({
    message: `${error.message}`,
    status: error.status || 500,
    stackTrace: error.stack,
    error: error
  })
}

export const handleErrorGlobal = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Error Global development')

    devError(error, res)
  } else {
    console.log('Error Global production')
  }
  next()
}
