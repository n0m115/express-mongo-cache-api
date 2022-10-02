const httpStatus = require('http-status');
const { Cache } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a cache
 * @param {Object} cacheBody
 * @returns {Promise<Cache>}
 */
const createCache = async (cacheBody) => {
  return Cache.create(cacheBody);
};

/**
 * Get cache by id
 * @param {ObjectId} id
 * @returns {Promise<Cache>}
 */
const getCacheById = async (id) => {
  return Cache.findById(id);
};

/**
 * Update cache by id
 * @param {ObjectId} cacheId
 * @param {Object} updateBody
 * @returns {Promise<Cache>}
 */
const updateCacheById = async (cacheId, updateBody) => {
  const cache = await getCacheById(cacheId);
  if (!cache) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cache value not found');
  }
  Object.assign(cache, updateBody);
  await Cache.save();
  return cache;
};

/**
 * Delete cache by id
 * @param {ObjectId} cacheId
 * @returns {Promise<Cache>}
 */
const deleteCacheById = async (cacheId) => {
  const cache = await Cache.getcacheById(cacheId);
  if (!cache) {
    throw new ApiError(httpStatus.NOT_FOUND, 'cache not found');
  }
  await Cache.remove();
  return cache;
};

module.exports = {
  createCache,
  getCacheById,
  updateCacheById,
  deleteCacheById,
};
