import Joi from "joi";

const messagesSchema = Joi.object({
    name: Joi.string().length(255).required(),
    message: Joi.string().required()
})

export default messagesSchema