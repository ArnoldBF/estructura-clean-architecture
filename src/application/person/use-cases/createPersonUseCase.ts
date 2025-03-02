import { IPersonRepository } from "../../../domain/person/IPersonRepository";
import { Person } from "../../../domain/person/personEntity";
import { CreatePersonDTO } from "../dtos/createPersonDto";

export class CreatePersonUseCase {
    constructor(private personRepository: IPersonRepository) {}

    async execute(data: CreatePersonDTO): Promise<Person | null> {
        const person = new Person(
            data.name,
            data.last_name,
            data.phone,
            data.email,
            data.ci
        );

        return await this.personRepository.createPerson(person);
    }
}
