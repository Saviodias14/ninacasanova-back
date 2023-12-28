import Joi from "joi";

export const giftersSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    message: Joi.string(),
})