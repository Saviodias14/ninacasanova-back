import { Request, Response } from "express";
import * as giftService from "@/service/gifts.service"
import httpStatus from "http-status";

export async function createGift(req:Request, res: Response){
    const data = req.body

    const result = await giftService.createGift(data)

    res.sendStatus(httpStatus.CREATED).send(result)
}

export async function getGifts(req:Request, res: Response){
    const result =  await giftService.getGifts()
    res.send(result)
}