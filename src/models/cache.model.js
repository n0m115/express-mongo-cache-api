const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const cacheSchema = mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
cacheSchema.plugin(toJSON);

/**
 * @typedef Cache
 */
const Cache = mongoose.model('Cache', cacheSchema);

module.exports = Cache;
