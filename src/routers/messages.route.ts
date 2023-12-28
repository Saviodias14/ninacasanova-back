import { validateBody } from "@/middleware/schemaValidation";
import messagesSchema from "@/schema/messages.schema";
import { Router } from "express";
import * as messagesController from '@/controller/messages.controller'

const messagesRouter = Router()

messagesRouter
    .post("/", validateBody(messagesSchema), messagesController.createMessage)
    .get("/", messagesController.getMessages)
    .delete("/:id", messagesController.deleteMessage)

export default messagesRouter