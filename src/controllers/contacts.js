import { createContact, deleteContact, getAllContacts, getContactById, patchContact } from "../services/contacts.js";

// Získání všech kontaktů
export const getContactsController = async (req, res, next) => {
    const contacts = await getAllContacts();
    res.json({
        status: 200,
        message: 'Successfully get all contacts!',
        data: contacts,
    });
}

// Získání kontaktu podle ID
export const getContactByIdController = async (req, res, next) => {
    const id = req.params.contactId;
    const contact = await getContactById(id);
    if (!contact) {
        return res.status(404).json({
            status: 404,
            message: `Contact with id ${id} not found!`,
        });
    }

    res.json({
        status: 200,
        message: `Successfully get contact with id ${id}!`,
        data: contact,
    });
}

// Vytvoření nového kontaktu
export const createContactController = async (req, res, next) => {
    const { body } = req;
    const contact = await createContact(body);

    res.status(201).json({
        status: 201,
        message: 'Successfully created contact!',
        data: contact,
    });
}

// Úprava existujícího kontaktu (PATCH)
export const patchContactController = async (req, res, next) => {
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
export const deleteContactController = async (req, res, next) => {
    const id = req.params.contactId;
    await deleteContact(id);

    res.status(204).send();
}
