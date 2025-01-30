import { Contact, type IContact, type IContactData } from '../db/models/contact.js';

export const getAllContacts = async (): Promise<IContact[]> => {
    return await Contact.find({}).lean();
};

export const getContactById = async (id: string): Promise<IContact | null> => {
    return await Contact.findById(id).lean();
};

export const createContact = async (payload: IContactData): Promise<IContact> => {
    return await Contact.create(payload);
};

export const patchContact = async (id: string, payload: Partial<IContactData>): Promise<IContact | null> => {
    const contact = await Contact.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    return contact;
};

export const deleteContact = async (id: string): Promise<IContact | null> => {
    return await Contact.findByIdAndDelete(id).lean();
};
