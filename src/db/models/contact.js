import mongoose from 'mongoose';

// Schéma adresy pro kontakt
const AddressSchema = new mongoose.Schema({
  description: { type: String },
  street: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
});

// Schéma kontaktu
const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  emails: { type: [String], required: true },
  phones: { type: [String], default: [] },
  addresses: { type: [AddressSchema], default: [] },
});

export const Contact = mongoose.model('Contact', ContactSchema);
