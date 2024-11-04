import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.APK_KEY
})

export const chatWithGPT = async (prompt: string): Promise<string> => {
  console.log('🚀 ~ chatWithGPT ~ prompt:', prompt)
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    })

    return response.choices[0].message.content || ''
  } catch (error: any) {
    console.error('Error calling ChatGPT API:', error.response ? error.response.data : error.message)
    throw error
  }
}
