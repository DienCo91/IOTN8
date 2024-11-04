import mongoose from 'mongoose'

const MessagesSchema = new mongoose.Schema({
  content: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now()
  },
  person_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Persons', required: true },
  chat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Chats' }
})

MessagesSchema.pre('save', function (next) {
  this.time = new Date()
  next()
})

const Messages = mongoose.model('Messages', MessagesSchema)

export default Messages
