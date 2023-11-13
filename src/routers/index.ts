import { Router } from "express";
import giftRouter from "./gifts.router";
import invitesRouter from "./invites.router";

const router = Router()

router
.use("/gifts", giftRouter)
.use("/invites", invitesRouter)
export default router