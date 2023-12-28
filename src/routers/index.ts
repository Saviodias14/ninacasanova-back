import { Router } from "express";
import giftRouter from "./gifts.router";
import invitesRouter from "./invites.router";
import giftersRouter from "./gifters.route";

const router = Router()

router
.use("/gifts", giftRouter)
.use("/invites", invitesRouter)
.use("/gifters", giftersRouter)
export default router