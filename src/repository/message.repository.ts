import { prisma } from "@/database";
import { MessageBody } from "@/protocols";

export async function createMessage(data: MessageBody) {
    return await prisma.messages.create({ data })
}

export async function getMessages() {
    return await prisma.messages.findMany()
}

export async function getMessageById(id: number) {
    return await prisma.messages.findUnique({ where: { id } })
}

export async function deleteMessage(id: number) {
    return await prisma.messages.delete({ where: { id } })
}