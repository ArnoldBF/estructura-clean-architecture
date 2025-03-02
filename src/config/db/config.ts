import config from "../env";
export const configEntities = [
    config.nodeEnv === "production"
        ? "dist/src/infrastructure/database/**/*.js"
        : "src/infrastructure/database/**/*.ts",
];

export const configMigrations = [
    config.nodeEnv === "production"
        ? "dist/src/infrastructure/database/migrations/*.js"
        : "src/infrastructure/database/migrations/*.ts",
];
