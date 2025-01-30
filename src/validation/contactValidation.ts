import { z } from "zod";
import { IContactData } from "../db/models/contact.js";

export const AddressSchema = z.object({
  description: z.string().optional(),
  street: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),
});

export const ContactSchema = z.object({
  firstName: z.string().min(1, "Jméno je povinné."),
  lastName: z.string().min(1, "Příjmení je povinné."),
  emails: z.array(z.string().email("Neplatný e-mail.")).min(1, "Musí být uveden alespoň jeden e-mail."),
  phones: z.array(z.string()).optional(),
  addresses: z.array(AddressSchema).optional()
}) satisfies z.ZodType<IContactData>;

export const ContactPatchSchema = ContactSchema.partial();
