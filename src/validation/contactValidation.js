import { z } from "zod";

const AddressSchema = z.object({
  description: z.string().optional(),
  street: z.string().min(1, "Ulice je povinná."),
  city: z.string().min(1, "Město je povinné."),
  postalCode: z.string().min(1, "PSČ je povinné."),
});

export const ContactSchema = z.object({
  firstName: z.string().min(1, "Jméno je povinné."),
  lastName: z.string().min(1, "Příjmení je povinné."),
  emails: z.array(z.string().email("Neplatný e-mail.")).min(1, "Musí být uveden alespoň jeden e-mail."),
  phones: z.array(z.string()).optional(),
  addresses: z.array(AddressSchema).optional(),
});
