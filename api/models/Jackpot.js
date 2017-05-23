/**
 * Jackpot Model
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
     * @description Determine if the pot is the current running pot
     */
    current: {
      type: 'boolean',
      defaultsTo: false
    },
    /**
     * @name hash
     * @type string
     * @description The hash is a md5 encryption of the round secret and winning percentage.
     */
    hash: {
      type: 'string',
      unique: true,
      size: '32'
    },
    /**
     * @name totalParticipants
     * @type integer
     * @description Number of total participants on the pot
     */
    totalParticipants: {
      type: 'integer',
      defaultsTo: 0
    },
    /**
     * @name totalSkins
     * @type integer
     * @description Total skins deposited in current game
     */
    totalSkins: {
      type: 'integer',
      defaultsTo: 0
    },
    /**
     * @name totalPot
     * @type float
     * @description Total value in skins on the pot
     */
    totalPot: {
      type: 'float',
      defaultsTo: 0
    }
  },
  /**
   * @name totalPot
   *
   * @return Promise
   */
  getCurrent: () => {
    return this.findOneByCurrent(true);
  }
};
