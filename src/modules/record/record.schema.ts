import { model, Schema } from 'mongoose';

const schema = new Schema({
  title: String,
  description: String,
  value: Number,
  timestamp: Number,

  isIncome: Boolean,
  type: String,

  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const Record = model('Record', schema);
