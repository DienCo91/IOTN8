export class CustomError extends Error {
  public statusCode: number // Định nghĩa statusCode là kiểu number
  public status: string
  public isOperation: boolean

  constructor(message: string, statusCode: number) {
    super(message) // Gọi hàm khởi tạo của lớp cha

    this.statusCode = statusCode
    this.status = statusCode >= 400 && statusCode < 500 ? 'failed' : 'ok' // Chú ý điều kiện
    this.isOperation = true

    Error.captureStackTrace(this, this.constructor)
  }
}
