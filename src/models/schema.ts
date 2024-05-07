import { Database } from "bun:sqlite";

export const db = new Database("./src/models/dev.db");
