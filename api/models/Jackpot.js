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
    hash: {
      type: 'string'
      size: '32'
      unique: true
    },
    totalParticipants: {
      type: 'integer',
      defaultsTo: 0
    },
    totalPot: {
      type: 'float'
      defaultsTo: 0
    }
  }
};
