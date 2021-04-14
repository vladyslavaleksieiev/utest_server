import { model, Schema } from 'mongoose';

const schema = new Schema({
  firstName: String,
  lastName: String,

  email: { type: String, unique: true },
  password: String,
});

export const User = model('User', schema);
