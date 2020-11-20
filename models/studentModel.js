import mongoose from 'mongoose';

//criando um model para a collection
const studentSchema =  mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

//definindo o uso do model da collection
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };