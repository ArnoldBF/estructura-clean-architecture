import { Router } from "express";
// import validatorHandler from "../middlewares/validator.handler";
// import { updatePersonSchema, getPersonSchema } from "../schemas/person.schema";
import { PersonController } from "../controllers/person.controller";

const router = Router();

// router.get("/", getPersons);
// router.get("/:id", validatorHandler(getPersonSchema, "params"), getPersonsById);
router.post(
    "/",
    PersonController.createPerson
    // validatorHandler(getPersonSchema, "params"),
    // validatorHandler(updatePersonSchema, "body"),
    // putPerson
);

export default router;
