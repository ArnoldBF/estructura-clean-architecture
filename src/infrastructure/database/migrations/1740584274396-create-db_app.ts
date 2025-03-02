import {
    MigrationInterface,
    QueryResult,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateDbApp1740584274396 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "persons",

                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "ci",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "created_at",
                        type: "datetime2",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "datetime2",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "person_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "datetime2",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "datetime2",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        await queryRunner.createTable(
            new Table({
                name: "credentials",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "plataforma",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "datetime2",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "datetime2",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        await queryRunner.createForeignKey(
            "users",
            new TableForeignKey({
                columnNames: ["person_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "persons",
                onDelete: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "credentials",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("users", "FK_person_id");
        await queryRunner.dropForeignKey("credentials", "FK_user_id");
        await queryRunner.dropTable("credentials");
        await queryRunner.dropTable("persons");
        await queryRunner.dropTable("users");
    }
}
