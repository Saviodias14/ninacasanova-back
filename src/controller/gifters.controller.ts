import { Request, Response } from "express";
import httpStatus from "http-status";
import * as giftersService from '../service/gifters.service'


export async function createGifters(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const data = req.body

    if (isNaN(id) || id < 1) return res.status(httpStatus.BAD_REQUEST).send('Invalid id')

    const result = await giftersService.createGifters(id, data)

    return res.status(httpStatus.CREATED).send(result)
}

export async function getGifters(req: Request, res: Response) {
    const result = await giftersService.getGifters()

    return res.status(httpStatus.OK).send(result)
}

export async function deleteGifters(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    
    if (isNaN(id) || id < 1) return res.status(httpStatus.BAD_REQUEST).send('Invalid id')

    const result = await giftersService.deleteGifters(id)

    return res.status(httpStatus.OK).send(result)
}