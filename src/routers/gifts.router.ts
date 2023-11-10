import  * as giftController from "@/controller/gifts.controller";
import { validateBody } from "@/middleware/schemaValidation";
import { giftsSchema } from "@/schema/gifts.schema";
import { Router } from "express";


const giftRouter = Router()

giftRouter
.post('/', validateBody(giftsSchema), giftController.createGift)
.get('/', giftController.getGifts)
.put('')
.delete('')

export default giftRouter