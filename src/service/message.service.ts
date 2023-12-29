import notFoundError from '../errors/notFoundError';
import { MessageBody } from '../protocols';
import * as messageRepository from '../repository/message.repository'

export async function createMessage(data: MessageBody) {
    return await messageRepository.createMessage(data)
}

export async function getMessages() {
    return await messageRepository.getMessages()
}

export async function deleteMessage(id: number) {
    const existMessage = await messageRepository.getMessageById(id)
    if (!existMessage) return notFoundError('Id does not exist')

    const result = await messageRepository.deleteMessage(id)
    return result
}