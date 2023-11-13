import { Request, Response } from "express";
import * as invitesService from "@/service/invites.service"
import httpStatus from "http-status";

export async function createInvite(req: Request, res: Response) {
    const data = req.body
    const result = await invitesService.createInvite(data)
    res.status(httpStatus.CREATED).send(result)
}

export async function getInvites(req: Request, res: Response) {
    const result = await invitesService.getInvites()

    res.status(httpStatus.OK).send(result)
}

export async function deleteInvite(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    if (isNaN(id) || id < 1) return res.status(httpStatus.BAD_REQUEST).send("Invalid id")
    const result = await invitesService.deleteInvite(id)

    res.status(httpStatus.OK).send(result)
}