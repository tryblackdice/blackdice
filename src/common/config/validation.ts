import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  REDIS_URI: Joi.string().required(),
  MESSENGER_API_KEY: Joi.string().required(),
  MESSENGER_TEMPLATE: Joi.string().required(),
});
