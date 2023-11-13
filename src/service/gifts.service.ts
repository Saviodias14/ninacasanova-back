import conflictError from "@/errors/conflictError";
import notFoundError from "@/errors/notFoundError";
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

export async function updateGift(id: number, data: GiftBody){
    const existGift = await giftRpository.findGiftById(id)
    if(!existGift) throw notFoundError('Gift not found')
    return await giftRpository.updateGift(id, data)
}

export async function deleteGift(id:number){
    const existGift = await giftRpository.findGiftById(id)
    if(!existGift) throw notFoundError('Gift not found')
    return await giftRpository.deleteGift(id)
}