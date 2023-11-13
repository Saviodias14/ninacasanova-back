import { prisma } from "@/database";
import { InviteBody } from "@/protocols";

export async function createInvite(data: InviteBody) {
    return await prisma.invites.create({ data })
}

export async function getInvites() {
    return await prisma.invites.findMany()
}

export async function findGiftByName(name: string) {
    return await prisma.invites.findUnique({ where: { name } })
}
export async function findGiftByPhone(phone: string) {
    return await prisma.invites.findUnique({ where: { phone } })
}
export async function findGiftById(id: number) {
    return await prisma.invites.findUnique({ where: { id } })
}

export async function deleteInvite(id: number) {
    return await prisma.invites.delete({ where: { id } })
}
