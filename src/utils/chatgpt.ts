export const chatWithGPT = async (prompt: string) => {
  // try {
  //   const response = await openai.chat.completions.create({
  //     model: 'gpt-3.5-turbo', // Hoặc "gpt-4" nếu bạn có quyền truy cập
  //     messages: [{ role: 'user', content: prompt }],
  //     max_tokens: 100, // Số lượng token tối đa trong phản hồi
  //     temperature: 0.7 // Độ sáng tạo của phản hồi
  //   })
  //   console.log(response.choices[0].message.content)
  //   return response.choices[0].message.content || ''
  // } catch (error: any) {
  //   console.error('Error calling ChatGPT API:', error.response ? error.response.data : error.message)
  //   throw error
  // }
}
