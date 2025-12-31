import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("MySQL connected successfully");
    })
    .catch((err) => {
        console.error("Database connection failed", err);
    });
