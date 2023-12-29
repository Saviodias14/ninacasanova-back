import notFoundError from "../errors/notFoundError";
import { GiftersBody } from "../protocols";
import * as giftRepository from "../repository/gifts.repository"
import * as giftersRepository from "../repository/gifters.repository"


export async function createGifters(id: number, data: GiftersBody) {
    const existGiftId = await giftRepository.findGiftById(id)
    if (!existGiftId) throw notFoundError('Gift does not exist')
    const result = await giftersRepository.createGifters({ ...data, giftId: id })
    return result
}

export async function getGifters() {
    return await giftersRepository.getGifters()
}

export async function deleteGifters(id: number) {
    const existGifterId = await giftersRepository.findGifterById(id)
    if (!existGifterId) throw notFoundError('Gifter does not exist')
    const result = await giftersRepository.deleteGifters(id)
    return result
}