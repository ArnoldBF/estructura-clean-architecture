import { Person } from "./personEntity";

export interface IPersonRepository {
    createPerson(person: Person): Promise<Person | null>;
}
