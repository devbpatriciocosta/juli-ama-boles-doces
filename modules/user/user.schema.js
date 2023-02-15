import Joi from 'joi'

export const signUpSchema = Joi.object({
  completeName: Joi.string()
    .required()
    .max(50)
    .message('O campo "Nome" pode ter no máximo {{#limit}} caracteres'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .max(100)
    .message('O campo "E-mail" pode ter no máximo {{#limit}} caracteres'),
  password: Joi.string()
    .required()
    .max(50)
    .message('O campo "Senha" pode ter no máximo {{#limit}} caracteres')
    .min(6)
    .message('O campo "Senha" pode ter no mínimo {{#limit}} caracteres')
})

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string()
    .required()
    .max(50)
    .message('O campo "Senha" pode ter no máximo {{#limit}} caracteres')
    .min(6)
    .message('O campo "Senha" pode ter no mínimo {{#limit}} caracteres')
})

export const productRegistrationSchema = Joi.object({
  productName: Joi.string()
    .required()
    .max(50)
    .message('O campo "Produto" pode ter no máximo {{#limit}} caracteres'),
  productPrice: Joi.string()
    .required()
    .max(50)
    .message('O campo "Preço" pode ter no máximo {{#limit}} caracteres')
    .min(4)
    .message('O campo "Senha" pode ter no mínimo {{#limit}} caracteres')
})
