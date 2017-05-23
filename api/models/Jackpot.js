/**
 * Jackpot.js
 *
 * @description :: TODO: This module define attributes like current pot, hash of the pot, totalParticipants in the pot and the totalPot(money in the pot)
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 * @author Afonso Martins <afonsopoker@gmail.com>
 */
module.exports = {
  attributes: {
    /**
   * @name current
   * @type boolean
   * @description Says if the pot is running or not!
   */
    current: {
      type: 'boolean',
      defaultsTo: false
    },
    /**
   * @name hash
   * @type string
   * @description The hash is a md5 encryption of the round secret and winning percentage. Example: c61f0fab614061124d85d0bdb0d15640
   */
    hash: {
      type: 'string'
      size: '32'
      unique: true
    },
    /**
   * @name totalParticipants
   * @type integer
   * @description Number of total players on the pot!
   */
    totalParticipants: {
      type: 'integer',
      defaultsTo: 0
    },
    /**
   * @name totalPot
   * @type float
   * @description Total value on the pot!
   */
    totalPot: {
      type: 'float'
      defaultsTo: 0
    }
  }
};
