import Joi from "joi";

const emailSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required();
const usernameSchema = Joi.string().max(30);
const passwordSchema = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));

// export const idSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const registerUserSchema = Joi.object({
  email: emailSchema.required(),
  username: usernameSchema.required(),
  password: passwordSchema.required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password')),
  rememberUser: Joi.boolean(),
});