import mongoose from 'mongoose'

const ChatsSchema = new mongoose.Schema({
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
  person_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Persons' }
})

ChatsSchema.pre('save', function (next) {
  this.time = new Date()
  next()
})

const Chats = mongoose.model('Chats', ChatsSchema)

export default Chats
