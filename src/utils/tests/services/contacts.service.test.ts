import { createContact } from '../../../services/contacts.js';
import { Contact } from '../../../db/models/contact.js';
import { type IContact, type IContactData } from '../../../db/models/contact.js';

jest.mock('../../../db/models/contact.js');

describe('createContact', () => {
  it('should create a new contact successfully', async () => {
    const mockContactData: IContactData = {
      firstName: 'John',
      lastName: 'Doe',
      emails: ['test@example.com'],
      phones: ['123-456'],
      addresses: [],
    };

    const mockContact = {
      ...mockContactData,
      _id: 'some-fake-id',
      $isDefault: jest.fn(),
      $isDeleted: jest.fn(),
      save: jest.fn().mockResolvedValue(true),
      toObject: jest.fn(),
    } as unknown as IContact;

    (Contact.create as jest.Mock).mockResolvedValue(mockContact);

    const result = await createContact(mockContactData);

    expect(result).toEqual(mockContact);
    expect(Contact.create).toHaveBeenCalledWith(mockContactData);
  });
});
