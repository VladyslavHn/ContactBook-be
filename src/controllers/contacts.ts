import { Request, Response, NextFunction } from 'express';
import { createContact, deleteContact, getAllContacts, getContactById, patchContact } from "../services/contacts.js";
import { IContact } from '../db/models/contact.js'

// Získání všech kontaktů
export const getContactsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const contacts = await getAllContacts();
        res.json({
            status: 200,
            message: 'Successfully got all contacts!',
            data: contacts,
        });
    } catch (error) {
        next(error);
    }
};

// Získání kontaktu podle ID
export const getContactByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.contactId;
        const contact = await getContactById(id);
        if (!contact) {
            return res.status(404).json({ status: 404, message: `Contact with id ${id} not found!` });
        }
        res.json({ status: 200, message: `Successfully got contact with id ${id}!`, data: contact });
    } catch (error) {
        next(error);
    }
};

// Vytvoření nového kontaktu
export const createContactController = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const contact = await createContact(body);

    res.status(201).json({
        status: 201,
        message: 'Successfully created contact!',
        data: contact,
    });
}

// Úprava existujícího kontaktu
export const patchContactController = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const id = req.params.contactId;
    const contact = await patchContact(id, body);

    res.status(200).json({
        status: 200,
        message: 'Successfully patch contact!',
        data: contact,
    });
}

// Smazání kontaktu podle ID
export const deleteContactController = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.contactId;
    await deleteContact(id);

    res.status(204).send();
}
