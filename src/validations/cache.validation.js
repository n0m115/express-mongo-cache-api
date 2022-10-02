const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCache = {
  body: Joi.object().keys({
    value: Joi.string().required(),
  }),
};

const getCache = {
  params: Joi.object().keys({
    cacheId: Joi.string().custom(objectId),
  }),
};

const updateCache = {
  params: Joi.object().keys({
    cacheId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      value: Joi.string(),
    })
    .min(1),
};

const deleteCache = {
  params: Joi.object().keys({
    cacheId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCache,
  getCache,
  updateCache,
  deleteCache,
};
