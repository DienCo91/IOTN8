import mongoose from 'mongoose'

const PersonsSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [3, 'Movies must have at least 4 characters'],
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false
  },
  fullName: {
    type: String,
    minlength: [3, 'Movies must have at least 4 characters'],
    lowercase: true,
    unique: true
  },
  IOTToken: {
    type: String
  },
  list_health: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Healths' }],
  list_chat: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chats' }]
})

const Persons = mongoose.model('Persons', PersonsSchema)

export default Persons
