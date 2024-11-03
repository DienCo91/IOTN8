import mongoose from 'mongoose'

const HealthsSchema = new mongoose.Schema({
  heart_rate: {
    type: Number,
    required: [true, 'heart_rate is required']
  },
  spo2: {
    type: Number,
    required: [true, 'spo2 is required'],
    minlength: [8, 'Password must be at least 8 characters']
  },
  time: {
    type: Date,
    default: Date.now()
  },
  person_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Persons', required: true }
})

HealthsSchema.pre('save', function (next) {
  this.time = new Date()
  next()
})

const Healths = mongoose.model('Healths', HealthsSchema)

export default Healths
