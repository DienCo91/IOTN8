export interface CustomError extends Error {
  statusCode?: number
  status?: string | number
  stack?: string
}
// Interface cho MongoDB duplicate key error
export interface MongoError extends Error {
  code?: number
  keyPattern?: Record<string, number>
}
