import express from 'express'
import pino from 'pino-http'
import cors from 'cors'
import { env } from './utils/env.js'
import { ENV_VARS } from './constants/index.js'
import { errorhandlerMiddleware } from './middlewares/errorhandlerMiddleware.js'
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js'
import { getAllContacts, getContactById } from './services/contacts.js'

export const startServer = () => {

    const app = express();

    app.use(pino({
        transport: {
            target: 'pino-pretty', // Formátování logů pro lepší čitelnost
        },
    }));

    // Povolení CORS pro přístup z jiných domén
    app.use(cors())


    app.get('/contacts', async (req, res, next) => {
        const contacts = await getAllContacts();
        res.json({
            status: 200,
            message: 'Successfully get all contacts!',
            data: contacts,
        });
    });

    app.get('/contacts/:contactId', async (req, res, next) => {
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
    })

    // Middleware pro zpracování neexistujících tras
    app.use(notFoundMiddleware)

    // Middleware pro zpracování chyb, které vzniknou během práce aplikace
    app.use(errorhandlerMiddleware)

    // Určení portu pro server, buď z ENV, nebo výchozí hodnota (3000)
    const PORT = env(ENV_VARS.PORT, 3000);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!`);
    })
}
