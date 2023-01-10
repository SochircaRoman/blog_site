const Mongoose = require("mongoose");
const db = {
    init: async () => {
        const connection = new Mongoose(
            process.env.DB_URL,
            {
                host: process.env.DB_HOST
            }
        )

        try {
            await connection.connect();
            console.error('\x1b[32m', 'Connection to database: OK');

        } catch (error) {
            console.error('\x1b[31m', 'Unable to connect to the database:', error);
        }
    }
};

module.exports = db