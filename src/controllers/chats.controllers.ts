import { Request, Response } from 'express'

export const getMessage = async (req: Request, res: Response) => {
  const { prompt } = req.body // Nhận prompt từ body của request
  try {
    // const response = await chatWithGPT(prompt)
    // res.status(200).json({ response })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while calling ChatGPT API.' })
  }
}
