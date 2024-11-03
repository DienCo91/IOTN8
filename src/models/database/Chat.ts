import mongoose from 'mongoose'

const ChatSchema = new mongoose.Schema({
  request: {
    type: String
  },
  response: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  },
  person_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' }
})

ChatSchema.pre('save', function (next) {
  this.time = new Date()
  next()
})

const Chat = mongoose.model('Chat', ChatSchema)

export default Chat
