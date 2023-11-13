import { Gifts, Invites } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
}

export type GiftBody = Omit<Omit<Gifts, 'id'>, 'avaliable'>
export type InviteBody = Omit<Invites, 'id'>