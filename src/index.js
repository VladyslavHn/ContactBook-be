import { initMongoConnection } from "./db/initMongoConnection.js";
import { Contact } from "./db/models/contact.js";
import { startServer } from "./server.js";

(async () => {
    await initMongoConnection();
    startServer();
})();

