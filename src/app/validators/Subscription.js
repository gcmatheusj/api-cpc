const Joi = require("joi");

module.exports = {
  body: {
    proponent: Joi.object({
      name: Joi.string().required(),
      cpf: Joi.string()
        .required()
        .min(11),
      email: Joi.string()
        .email()
        .required(),
      address: Joi.object({
        cep: Joi.string()
          .required()
          .min(8),
        city: Joi.string().required(),
        street: Joi.string().required(),
        neighborhood: Joi.string().required(),
        state: Joi.string().required()
      }),
      phone: Joi.string().required()
    }),
    movie: Joi.object({
      title: Joi.string().required(),
      parentalRating: Joi.string().required(),
      duration: Joi.string().required(),
      city: Joi.string().required(),
      category: Joi.string().required(),
      synopsis: Joi.string().required()
    }),
    productionMovie: Joi.object({
      directorName: Joi.string().required(),
      photographyDirection: Joi.string().required(),
      artDirection: Joi.string().required(),
      production: Joi.string().required(),
      country: Joi.string().required(),
      year: Joi.number().required(),
      executiveProduction: Joi.string().required(),
      setting: Joi.string().required(),
      sound: Joi.string().required(),
      videoUrl: Joi.string().required(),
      passwordVideo: Joi.string().required()
    })
  }
};
