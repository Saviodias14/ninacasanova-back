import { Router } from "express";
import giftRouter from "./gifts.router";
import invitesRouter from "./invites.router";
import giftersRouter from "./gifters.route";
import messagesRouter from "./messages.route";

const router = Router()

router
    .use("/gifts", giftRouter)
    .use("/invites", invitesRouter)
    .use("/gifters", giftersRouter)
    .use("/messages", messagesRouter)
export default router