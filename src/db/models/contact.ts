import { Document, Schema, model } from 'mongoose';

// IContactData: Popis struktury dat pro kontakt (bez metod Mongoose)
// Používá se pro validaci a práci s daty v servisní vrstvě
export interface IContactData {
  firstName: string;
  lastName: string;
  emails: string[];
  phones?: string[];
  addresses?: IAddress[];
}

export interface IAddress {
  description?: string;
  street: string;
  city: string;
  postalCode: string;
}

// IContact: Rozšiřuje IContactData o metody Mongoose
// Používá se pro práci s dokumenty v MongoDB přes Mongoose
export interface IContact extends IContactData, Document {}

const AddressSchema = new Schema<IAddress>({
  description: { type: String },
  street: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
});

const ContactSchema = new Schema<IContact>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  emails: { type: [String], required: true },
  phones: { type: [String], default: [] },
  addresses: { type: [AddressSchema], default: [] },
});

export const Contact = model<IContact>('Contact', ContactSchema);
