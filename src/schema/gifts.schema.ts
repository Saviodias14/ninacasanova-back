import Joi from "joi";

export const giftsSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    price: Joi.number().min(0).integer().required()    
})