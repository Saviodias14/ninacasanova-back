import conflictError from "@/errors/conflictError";
import { GiftBody } from "@/protocols";
import * as giftRpository from "@/repository/gifts.repository"


export async function createGift(data: GiftBody) {
    const existGift = await giftRpository.findGiftByName(data.name)
    if (existGift) throw conflictError('Gift already exist')
    return await giftRpository.createGift(data)
}

export async function getGifts() {
    return await giftRpository.getGifts()
}