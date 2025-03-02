import express, { Application } from "express";

import config from "../config/env";

import { connectDatabase } from "../config/database";

import { personRouter } from "./routes";

import cors from "cors";

export class Server {
    public app: Application;
    public paths: { [key: string]: string };

    constructor() {
        this.app = express();
        this.paths = {
            persons: "/api/persons",
            users: "/api/users",
            auth: "/api/auth",
        };

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private async database() {
        await connectDatabase();
    }

    private routes() {
        this.app.use(this.paths.persons, personRouter);
    }

    public listen() {
        this.app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });
    }
}
