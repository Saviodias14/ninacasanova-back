import conflictError from "@/errors/conflictError";
import notFoundError from "@/errors/notFoundError";
import { InviteBody } from "@/protocols";
import * as invitesRepository from "@/repository/invites.repository"

export async function createInvite(data: InviteBody) {
    const existName = await invitesRepository.findGiftByName(data.name)
    const existPhone = await invitesRepository.findGiftByPhone(data.phone)
    if (existName || existPhone) throw conflictError('Invite already exist')
    return await invitesRepository.createInvite(data)
}

export async function getInvites() {
    return await invitesRepository.getInvites()
}

export async function deleteInvite(id: number) {
    const existInvite = await invitesRepository.findGiftById(id)

    if (!existInvite) throw notFoundError("Invite not found")
    return await invitesRepository.deleteInvite(id)
}