import { validateBody } from "../middleware/schemaValidation";
import { giftersSchema } from "../schema/gifters.schema";
import { Router } from "express";
import * as giftersController from "../controller/gifters.controller"

const giftersRouter = Router()

giftersRouter
    .post("/:id", validateBody(giftersSchema), giftersController.createGifters)
    .get("/", giftersController.getGifters)
    .delete("/:id", giftersController.deleteGifters)

export default giftersRouter