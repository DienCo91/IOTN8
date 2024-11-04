import mongoose from 'mongoose'

const ChatsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  },
  persons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Persons' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Messages' }]
})

ChatsSchema.pre('save', function (next) {
  this.time = new Date()
  next()
})

const Chats = mongoose.model('Chats', ChatsSchema)

export default Chats
