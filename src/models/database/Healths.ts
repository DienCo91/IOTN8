import mongoose from 'mongoose'

const HealthsSchema = new mongoose.Schema({
  heart_rate: {
    type: String
  },
  spo2: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false
  },
  time: {
    type: Date,
    default: Date.now()
  },
  person_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Persons' }
})

HealthsSchema.pre('save', function (next) {
  this.time = new Date()
  next()
})

const Healths = mongoose.model('Healths', HealthsSchema)

export default Healths
