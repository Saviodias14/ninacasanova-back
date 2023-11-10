import { Router } from "express";
import giftRouter from "./gifts.router";

const router = Router()

router.use("/gifts", giftRouter)
export default router