import Joi from "joi";

const messagesSchema = Joi.object({
    name: Joi.string().max(255).required(),
    message: Joi.string().required()
})

export default messagesSchema