import { Repository } from "typeorm";

import { Person } from "./personModel";

import { AppDataSource } from "../../../config/database";

import { IPersonRepository } from "../../../domain/person/IPersonRepository";

export class PersonRepository
    extends Repository<Person>
    implements IPersonRepository
{
    constructor() {
        super(Person, AppDataSource.manager);
    }

    async createPerson(person: Person): Promise<Person | null> {
        try {
            const savePerson = await this.save(person);
            return savePerson;
        } catch (error) {
            console.error("Error creating person in respository", error);
            throw new Error("Error creating person");
        }
    }
}
