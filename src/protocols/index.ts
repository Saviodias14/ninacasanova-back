import { Gifters, Gifts, Invites, Messages } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
}

export type GiftBody = Omit<Omit<Gifts, 'id'>, 'avaliable'>
export type InviteBody = Omit<Invites, 'id'>
export type GiftersBody = Omit<Omit<Gifters, 'id'>, 'giftId'>
export type MessageBody = Omit<Messages, 'id'>