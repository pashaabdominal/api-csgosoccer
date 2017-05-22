/**
 * Jackpot.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    current: {
      type: 'boolean',
      defaultsTo: false
    },
    playersCount: {
      type: 'integer',
      defaultsTo: 0
    },
    total: {
      type: 'float',
      defaultsTo: 0
    }
  }
};
