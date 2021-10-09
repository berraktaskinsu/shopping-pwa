import mongoose, { Schema } from 'mongoose';

const BookSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, min: 0, required: true },
  authors: { type: [String], default: [''] }
});

export default mongoose.model('Book', BookSchema);
