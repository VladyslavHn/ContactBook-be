import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
});

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  emails: {
    type: [String],
    required: true,
    validate: {
      validator: function (emails) {
        return emails.length > 0;
      },
      message: 'Musí být uveden alespoň jeden email.',
    },
  },
  phones: {
    type: [String],
    default: [],
  },
  addresses: {
    type: [AddressSchema],
    default: [],
  },
});

export const Contact = mongoose.model('Contact', ContactSchema);
