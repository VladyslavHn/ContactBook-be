import express, { Express } from 'express';

import cors from 'cors'
import { env } from './utils/env.js'
import * as pinoHttp from 'pino-http';
import { ENV_VARS } from './constants/index.js'
import { errorhandlerMiddleware } from './middlewares/errorhandlerMiddleware.js'
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js'
import contactsRouter from './routers/contacts.js'

export const startServer = (): void => {

    const app: Express = express();

    app.use(
        pinoHttp.default({
            transport: {
                target: 'pino-pretty',
            },
        })
    );
            // Formátování logů pro lepší čitelnost


    // Povolení CORS pro přístup z jiných domén
    app.use(cors())

// Middleware pro zpracování JSON requestů
    app.use(express.json());

    // Připojení routeru pro kontakty
    app.use(contactsRouter);

    // Middleware pro zpracování neexistujících tras
    app.use(notFoundMiddleware)

    // Middleware pro zpracování chyb, které vzniknou během práce aplikace
    app.use(errorhandlerMiddleware)

    // Určení portu pro server, buď z ENV, nebo výchozí hodnota (3000)
    const PORT = Number(env(ENV_VARS.PORT, "3000"));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!`);
    })
}
