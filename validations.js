const Joi = require('joi')

const talentSchema = Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
    last: Joi.string().required()
})

const validateTalent = (talent) => {
    const { error } = talentSchema.validate(talent)
    return error == undefined
}

module.exports = { validateTalent }