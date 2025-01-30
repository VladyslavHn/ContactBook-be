import dotenv from 'dotenv'

// Načtení proměnných prostředí z .env souboru do process.env

dotenv.config();

export const env = (envName: string, defaultValue?: string): string => {
    const value = process.env[envName] ?? defaultValue;
    if (value === undefined) {
        throw new Error(`Env var with name ${envName} is not found`);
    }
    return value;
};
