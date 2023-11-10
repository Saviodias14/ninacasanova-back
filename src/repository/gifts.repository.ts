import { prisma } from "@/database";
import { GiftBody } from "@/protocols";

export async function findGiftByName(name: string) {
    return await prisma.gifts.findUnique({ where: { name } })
}

export async function createGift(data:GiftBody) {
    return await prisma.gifts.create({ data })
}

export async function getGifts() {
    return await prisma.gifts.findMany()   
}