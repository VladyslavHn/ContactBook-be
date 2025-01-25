import dotenv from 'dotenv'

// Načtení proměnných prostředí z .env souboru do process.env
dotenv.config();

export const env = (envName, defaultValue) => {
    if (process.env[envName]) return process.env[envName];
    if (defaultValue) return defaultValue;

    throw new Error(`Env var with name ${envName} is not found`);
}
