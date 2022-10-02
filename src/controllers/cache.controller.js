const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { cacheService } = require('../services');

const getCache = catchAsync(async (req, res) => {
  let cache = await cacheService.getCacheById(req.params.cacheId);
  if (!cache) {
    cache = await cacheService.createCache(req.body);
    res.status(httpStatus.CREATED).send(cache);
  }
  res.send(cache);
});

const createCache = catchAsync(async (req, res) => {
  const cache = await cacheService.createCache(req.body);
  res.status(httpStatus.CREATED).send(cache);
});

const updateCache = catchAsync(async (req, res) => {
  const cache = await cacheService.updateCacheById(req.params.cacheId, req.body);
  res.send(cache);
});

const deleteCache = catchAsync(async (req, res) => {
  await cacheService.deleteCacheById(req.params.cacheId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getCache,
  createCache,
  updateCache,
  deleteCache,
};
