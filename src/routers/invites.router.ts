import { validateBody } from "@/middleware/schemaValidation";
import { invitesSchema } from "@/schema/invites.schema";
import { Router } from "express";
import * as invitesController from "@/controller/invites.controller"

const invitesRouter = Router()

invitesRouter
    .post("/", validateBody(invitesSchema), invitesController.createInvite)
    .get("", invitesController.getInvites)
    .delete("/:id", invitesController.deleteInvite)
export default invitesRouter