import  * as giftController from "../controller/gifts.controller";
import { validateBody } from "../middleware/schemaValidation";
import { giftsSchema } from "../schema/gifts.schema";
import { Router } from "express";


const giftRouter = Router()

giftRouter
.post('/', validateBody(giftsSchema), giftController.createGift)
.get('/', giftController.getGifts)
.put('/:id', validateBody(giftsSchema), giftController.updateGift)
.delete('/:id', giftController.deleteGift)

export default giftRouter