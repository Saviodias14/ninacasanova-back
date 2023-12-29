import Joi from "joi";

export const giftsSchema = Joi.object({
    name: Joi.string().required(),
    link: Joi.string().uri().required(),
    image: Joi.string().uri().required(),
    price: Joi.number().min(0).integer().required()    
})