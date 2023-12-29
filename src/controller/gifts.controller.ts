import { Request, Response } from "express";
import * as giftService from "../service/gifts.service"
import httpStatus from "http-status";

export async function createGift(req:Request, res: Response){
    const data = req.body

    const result = await giftService.createGift(data)

    res.status(httpStatus.CREATED).send(result)
}

export async function getGifts(req:Request, res: Response){
    const result =  await giftService.getGifts()
    res.send(result)
}

export async function updateGift(req:Request, res: Response){
    const data = req.body
    const id = parseInt(req.params.id)
    if(isNaN(id)|| id<1){
        return res.status(httpStatus.BAD_REQUEST).send('Invalid id')
    }
    const result = await giftService.updateGift(id, data)

    res.status(httpStatus.OK).send(result)
}

export async function deleteGift(req:Request, res: Response){
    const id = parseInt(req.params.id)
    if(isNaN(id)|| id<1){
        return res.status(httpStatus.BAD_REQUEST).send('Invalid id')
    }

    const result = await giftService.deleteGift(id)

    res.status(httpStatus.OK).send(result)
}