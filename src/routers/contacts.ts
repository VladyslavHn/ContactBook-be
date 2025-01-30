import { Router } from 'express'
import { createContactController, deleteContactController, getContactByIdController, getContactsController, patchContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validate } from '../middlewares/validate.js';
import { ContactPatchSchema, ContactSchema } from '../validation/contactValidation.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));

contactsRouter.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

contactsRouter.post('/contacts', validate(ContactSchema), ctrlWrapper(createContactController));

contactsRouter.patch('/contacts/:contactId', validate(ContactPatchSchema), ctrlWrapper(patchContactController));

contactsRouter.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouter;
