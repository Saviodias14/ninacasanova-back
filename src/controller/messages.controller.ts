import { Request, Response } from "express";
import * as messageService from '@/service/message.service'
import httpStatus from "http-status";


export async function createMessage(req: Request, res: Response) {
    const data = req.body

    const result = await messageService.createMessage(data)
    return res.status(httpStatus.CREATED).send(result)
}

export async function getMessages(req: Request, res: Response) {

    const result = await messageService.getMessages()
    return res.status(httpStatus.OK).send(result)
}

export async function deleteMessage(req: Request, res: Response) {
    const id = parseInt(req.params.id)

    if (isNaN(id) || id < 1) return res.status(httpStatus.BAD_REQUEST).send('Invalid id')

    const result = await messageService.deleteMessage(id)

    return res.status(httpStatus.OK).send(result)
}