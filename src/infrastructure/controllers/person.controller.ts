import { Request, Response, NextFunction } from "express";

import { PersonRepository } from "../database/person/personRepository";
import { CreatePersonUseCase } from "../../application/person/use-cases/createPersonUseCase";

export class PersonController {
    static async createPerson(req: Request, res: Response, next: NextFunction) {
        const createPersonUseCase = new CreatePersonUseCase(
            new PersonRepository()
        );
        try {
            const person = await createPersonUseCase.execute(req.body);
            res.status(201).json(person);
        } catch (error) {
            next(error);
        }
    }
}
