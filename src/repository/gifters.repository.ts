import { prisma } from "@/database";
import { GiftersBody } from "@/protocols";


export async function createGifters(data: GiftersBody & { giftId: number }) {
    return await prisma.gifters.create({ data })
}

export async function getGifters() {
    return await prisma.gifters.findMany()
}

export async function deleteGifters(id: number) {
    return await prisma.gifters.delete({ where: { id } })
}

export async function findGifterById(id: number) {
    return await prisma.gifters.findUnique({ where: { id } })
}
